

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


if($('.pagee-plataforma').length <1){


(function detectarVisitaQuandoBodyEstiverPronto() {
  const tentarRodar = () => {
    const el = document.getElementById('body');
    if (!el) {
      // Tenta novamente em 50ms
      return setTimeout(tentarRodar, 50);
    }

    // Agora o body existe — segue a lógica normal
    const destino = el.getAttribute('secondvisit');
    const tempoMinAttr = el.getAttribute('secondvisitmintime');
    const tempoMinEmMin = parseInt(tempoMinAttr, 10);

    if (!destino || isNaN(tempoMinEmMin) || tempoMinEmMin <= 0) return;

    const tempoMinEmMs = tempoMinEmMin * 60 * 1000;
    const CHAVE = 'pagee_primeiro_acesso';
    const AGORA = Date.now();

    const primeiroAcesso = localStorage.getItem(CHAVE);

    if (!primeiroAcesso) {
      localStorage.setItem(CHAVE, AGORA.toString());
      console.log('Primeira visita detectada.');
        
      return;
    }

    const tempoPassado = AGORA - parseInt(primeiroAcesso, 10);

    if (tempoPassado >= tempoMinEmMs) {
     
      if (location.protocol === 'file:') {
        const aviso = document.createElement('div');
        aviso.textContent = '⚠️ O recurso "second visitor" foi ativado, mas o redirecionamento está desabilitado no modo local (file://). A contagem será reiniciada.';

        aviso.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #222;
          color: #fff;
          padding: 12px 20px;
          border-radius: 8px;
          font-family: sans-serif;
          font-size: 14px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 9999;
        `;

        document.body.appendChild(aviso);
        setTimeout(() => aviso.remove(), 5000);

        // Reinicia contagem
        localStorage.setItem(CHAVE, AGORA.toString());
      } else {
        console.log('Segunda visita válida. Redirecionando para:', destino);
        window.location.href = destino;
      }
    } else {
      console.log('Visitou novamente, mas ainda não passou o tempo mínimo.');
    }
  };

  // Inicia tentativa
  // tentarRodar();
})();


}












if($('.pagee-plataforma').length <1){
function isLocalhost() {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}
if (isLocalhost()) {
       $('body').append("<div id='localresetcookie'>clear memory</div><style>#localresetcookie{ font-family:arial; position:fixed; font-size:16px; right: 5px; top: 5px; background: blue; color:#fff; padding:.3em; border-radius:5px; border:1px solid #fff; z-index:9999;cursor:pointer}</style>");

} 
}


$('#localresetcookie').on('click', function () {
apagarTodosOsCookieslocal();
console.log('clear cookie');
});
function apagarTodosOsCookieslocal() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const nome = cookies[i].split('=')[0].trim();
        document.cookie = nome + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
}







