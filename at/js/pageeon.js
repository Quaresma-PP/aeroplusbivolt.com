function waitForElement(selector, timeout = 10000) {
      return new Promise((resolve, reject) => {
        const element = document.querySelector(selector);
        if (element) return resolve(element);

        const observer = new MutationObserver(() => {
          const el = document.querySelector(selector);
          if (el) {
            observer.disconnect();
            resolve(el);
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        setTimeout(() => {
          observer.disconnect();
          reject(new Error(`Elemento "${selector}" não apareceu em ${timeout}ms.`));
        }, timeout);
      });
    }
    
    
[
  '.location-country-code',
  '.location-country',
  '.location-state-code',
  '.location-state',
  '.location-city'
].forEach(selector => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = '';
});

const cookieName = 'geo_cache_1h';

let locationCountry = null;
let locationCountryCode = null;
let locationState = null;
let locationStateCode = null;
let locationCity = null;

const estadosBR = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

function getNomeEstadoBR(sigla) {
  if (!sigla) return null;
  sigla = sigla.toUpperCase();
  return estadosBR[sigla] || null;
}

function setCookie(name, value, minutes) {
  const d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function fetchWithTimeout(url, timeout = 2500) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
  ]);
}

function normalizeGeoData(data) {
  if (!data) return null;

  return {
    country: data.country || data.CountryName || data.country_name || null,
    country_code: data.country_code || data.countryCode || data.CountryCode || data.country_code2 || null,
    region: data.region || data.RegionName || data.region_name || data.state_prov || data.regionName || null,
    region_code: data.region_code || data.RegionCode || null,
    city: data.city || data.City || null
  };
}

async function fetchGeoFromApis() {
  const apis = [
    'https://apip.cc/json',
    //'https://freeip2geo.net/json/',
    // 'https://reallyfreegeoip.org/json/',
    // 'https://ip.nf/me.json',
    // 'http://ip-api.com/json/',
    // 'https://ipwho.is/',
    // 'https://api.ipgeolocation.io/ipgeo?apiKey=demo' // última — fallback
  ];

  for (let i = 0; i < apis.length; i++) {
    try {
      const res = await fetchWithTimeout(apis[i], 2500);
      if (!res.ok) continue;
      const data = await res.json();
      const geo = normalizeGeoData(data);

      if (i < apis.length - 1) {
        if (geo && geo.country && geo.region && geo.city) return geo; // exige dados completos
      } else {
        if (geo && (geo.country || geo.country_code)) return geo; // última: aceita parciais
      }

    } catch (_) {
      continue;
    }
  }

  return null;
}

async function getUserGeo() {
  const geo = await fetchGeoFromApis();
  if (geo) {
    setCookie(cookieName, JSON.stringify(geo), 60); // 1 hora
    return geo;
  }

  return null;
}

function locationParse(geo){
 if (geo) {
    locationCountry     = geo.country || '';
    locationCountryCode = geo.country_code || '';

     if (locationCountry && locationCountry.trim().toLowerCase() === 'brazil') {
      locationCountry = 'Brasil';
    }

    if (locationCountryCode === 'BR') {
      // Para Brasil, converte sigla para nome e tenta garantir o código do estado
      locationState = getNomeEstadoBR(geo.region) || geo.region || '';

      locationStateCode = geo.region_code || null;
      if ((!locationStateCode || locationStateCode === '') && geo.region) {
        const reg = geo.region.toUpperCase();
        if (reg.length === 2 && estadosBR[reg]) {
          locationStateCode = reg;
        }
      }
      locationStateCode = locationStateCode || '';
    } else {
      // Outros países só pegam o valor direto
      locationState = geo.region || '';
      locationStateCode = geo.region_code || '';
    }

    locationCity = geo.city || '';

    // Atualiza DOM
  
var mappings = {
  'location-country-code': locationCountryCode,
  'location-country': locationCountry,
 
  'location-state-code': locationStateCode,
  'location-state': locationState,
  'location-city': locationCity
};

  return mappings;
}
}


if ( !document.URL.includes("file:") )
{

var mappingsLoad = null;
const cached = getCookie(cookieName);

if (!cached) {
getUserGeo().then(geo => {
   mappingsLoad = locationParse(geo);
   Object.entries(mappingsLoad).forEach(([className, value]) => {
              const elements = document.querySelectorAll(`.${className}`);
              elements.forEach(el => {
                el.innerHTML = value;
              });});
});
} else {
   mappingsLoad = locationParse(JSON.parse(cached));
}


(async () => {
  try {
    const el = await waitForElement('[dynamic-text="dynamicLocation"]');
        if(mappingsLoad != null){
          Object.entries(mappingsLoad).forEach(([className, value]) => {
          const elements = document.querySelectorAll(`.${className}`);
          elements.forEach(el => {
            el.innerHTML = value;
          });
        });
        }
  } catch (e) {
    console.error(e.message);
  }
})();


}
