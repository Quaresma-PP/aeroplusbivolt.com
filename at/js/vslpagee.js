 
 var pagee_edit = $('.pagee-plataforma').length;
 var pageeapp = $('.pagee-plataforma').length;
 var pageeapppreview = $('body.preview-iframe').length;
var timerpage = 0;
$('body').append('<div id="PageTime" object_time="'+timerpage+'"></div>');

function bypagee(){
    
    var bb = $('#body.no_brand').length;  
        if(bb <1 && pageeapp <1){
               var bypageelink =  $('#bypagee').length;
        if(bypageelink < 1){ $('body').append('<a href="https://pagee.b-cdn.net/home.html" id="bypagee" target="_blank"></a>');}
            
        }
    
}


if(pageeapp<1){masterslaveelem()}

function masterslaveelem(){

 
  $( '[masterslave]' ).each( function(  ) {  
var pagename = $(this).attr('masterslave');
      var elemname = $(this).attr('id');
      
var neww = eval('masterpage'+pagename);
      

      var newobj = $(neww).find('#'+elemname).clone();
      
      
      $(this).replaceWith(newobj);
      //  getUserGeo()
      setTimeout(function() { 

webnariostyle(); 
          }, 200); 
     

  }); 

  
     
     

}


////////////url

//  var parameterlinkact = $('#body').hasClass('parameterlinkurl'); 
//    setTimeout(() => {
//        
//if(pageeapp < 1 && pageeapppreview < 1 ){  
//          
//      
//        if(parameterlinkact){
//      var links = document.getElementsByTagName("a");
//        for (var i = 0, n = links.length; i < n; i++) {
//            
//            var hasherf = links[i].href;
//           console.log(hasherf); 
//            var href = links[i].href.trim() +
//                    (links[i].href.indexOf("?") > 0 ? '&' : '?') +
//                    document.location.search.replace('?', '').toString();
//           if(hasherf != undefined || hasherf != null){  links[i].href = href;   }
//                
//              
//        } 
//    }     
// }   
//            
//      
//}, 1000);

var parameterlinkact = $('#body').hasClass('parameterlinkurl');
  setTimeout(() => {

      if (pageeapp < 1 && pageeapppreview < 1) {


          if (parameterlinkact && document.location.search != "") {
              var links = document.getElementsByTagName("a");
              for (var i = 0, n = links.length; i < n; i++) {

                  var hasherf = links[i].href;

                  if (hasherf.length > 0) {
                      
                      var href = links[i].href.trim() + (links[i].href.indexOf("?") > 0 ? '&' : '?') + document.location.search.replace('?', '').toString();
                    
                      links[i].href = href;
                  }
              }
          }
      }


  }, 1000);






   function getUrlParameter(name) {
       
    if(pageeapp < 1  && pageeapppreview < 1){    
       if(parameterlinkact){ 
       
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        
    }}
}



///////fim url
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.defer = true;
    document.head.appendChild(script);
}
if ( document.URL.includes("file:") ) {

    loadScript(`js/localopen.js`);

    
}
    setTimeout(function() { 
allpagecodeinject();
          }, 2000);   


// function allpagecodeinject(){
    
//     var platf = $('.pagee-plataforma').length;
// if(platf < 1){
//     $('body').append('<div id="allcodeonpage"></div>');
//     $('#allcodeonpage').load('pagescode.txt');
   
    
    
// }
    
    
// }
  

if(pageeapp>0){
    
  $('#body, .page-center *').scroll(function() {
videofloat();

    });
}


$(window).scroll(function() {
   
videofloat();
   
    });




setInterval(function () {
 videoscreens();
   countdown(); 
   
   

},400);








    if(  pagee_edit<1 ){
setInterval(function () {

    pageeaudioplayer();
   

},400);




setInterval(function () {
  if(  $('.page-edite').length ){timerpage = 0;}
    else{  timerpage = timerpage +1;
      $('#PageTime').attr('object_time', timerpage);
    }
    

objectTime();
//  delayelement();
    // elementcheckcookie();
    // delayelementsetcookie();
 bypagee();
    autored();

}, 1000);




setInterval(function () {

        dynamictextname('.dynamic-text-refresh5s');
        dynamictextwords('.dynamic-text-refresh5s');
         dynamictextnumber('.dynamic-text-refresh5s');
       
        $('.img-gallery-5s:not(:hover) .pagee-img-gallery-next, .carousel-auto-5s:not(:hover) .carousel-dot-right').trigger('click');
 

}, 5000);
 

setInterval(function () {
    
    
     dynamictextname('.dynamic-text-refresh10s');
         dynamictextwords('.dynamic-text-refresh10s');
            dynamictextnumber('.dynamic-text-refresh10s');
        
    $('.img-gallery-10s:not(:hover) .pagee-img-gallery-next, .carousel-auto-10s:not(:hover) .carousel-dot-right').trigger('click');

 
}, 10000);



setInterval(function () {
   
    
     dynamictextname('.dynamic-text-refresh30s');
         dynamictextwords('.dynamic-text-refresh30s');
            dynamictextnumber('.dynamic-text-refresh30s');
        $('.img-gallery-30s:not(:hover) .pagee-img-gallery-next, .carousel-auto-30s:not(:hover) .carousel-dot-right').trigger('click');
    

 
}, 30000);
}















$( window ).resize(function() {
	if($('body:not(.no-at-loop)').length){
dropmenu(); 
    elem3d() ;
	borderRadius();
		mobmaxheight();
	}
});



//function videocrrect() {
//$( ".video iframe" ).each( function(  ) {  
//
////     $(this).toggleClass('videocorrect');
//
//   
//  });
//}

mobmaxheight();
function mobmaxheight() {
       $( '[mob-max-height]' ).each( function(  ) {  
        var tval = $(this).attr('mob-max-height');
           var mob = $('main').width();
          
           if(mob<700){  $(this).css('min-height', tval+'px'); $(this).css('height', tval+'px'); }
           else{ $(this).css('height', ''); $(this).css('min-height', '');}
           
               }); 
}

function borderRadius(atack) {

	if(atack == undefined){atack =  $(".border-radius-per[data-border-radius]"); }
	
	
	
	
	   $( atack ).each( function(  ) {  
var val = $(this).attr('data-border-radius');
var wid  = $(this).width();
		  var childwid =  $(this).children('.subobj').width();
		   
		   var radius = (wid/100)*val;
		   var childradius = (childwid/100)*val;
		   
		     $(this).css('border-radius', radius+'px');
  $(this).children('.subobj').css('border-radius', childradius+'px');
     
    
		   
	    }); 
	
	
}















setInterval(function () {
codeaearuntest();
 
}, 1000);
function codeaearuntest() {

	
	
	 $( '.codetest' ).each( function(  ) {  

		 
		 $(this).append(' test codearea ');
	    }); 
	
	
	
	//<div class='codetest'><div>
	
}









///////////////////////////////////////////////////////////////////////////////////////
// action visibility
///////////////////////////////////////////////////////////////////////////////////////

function actionvisibilityonpage(idd){
    
try{    var HS = $('#'+idd).attr('action-elem-visibility-hidden_show').replaceAll(',',',#').replaceAll(' ','');
  
    if(HS){
        
     $('#'+HS).addClass('act-hidden_show');
$('#'+HS).removeClass('act-show_hidden');
       
    }
    
   }catch(e){}
       
       try{ 
    
      var SH = $('#'+idd).attr('action-elem-visibility-show_hidden').replaceAll(',',',#').replaceAll(' ','');
     
    if(SH){
       
         $('#'+SH).addClass('act-show_hidden');
$('#'+SH).removeClass('act-hidden_show');
       
       
       }
     }catch(e){}
    
elem3d();
}

$("html").delegate('body:not(.page-edite) [action-elem-visibility-hidden_show]:not(.pagee-audio, .pagee-prog-bar,.pagee-countdown )','click',function(){
   
    var elem = $(this).attr('action-elem-visibility-hidden_show').replaceAll(',',',#').replaceAll(' ','');
$('#'+elem).addClass('act-hidden_show');
$('#'+elem).removeClass('act-show_hidden');

         pageeprogbar('.action-elem-visibility-hidden_show');
    elem3d();
});


$("html").delegate('body:not(.page-edite) [action-elem-visibility-show_hidden]:not(.pagee-audio, .pagee-prog-bar,.pagee-countdown )','click',function(){
       var elem = $(this).attr('action-elem-visibility-show_hidden').replaceAll(',',',#').replaceAll(' ','');
   
 
$('#'+elem).addClass('act-show_hidden');
$('#'+elem).removeClass('act-hidden_show');

   elem3d(); 
});



$("html").delegate('body:not(.page-edite) [downloadfile]','click',function(){

var urlfile = $(this).attr('downloadfile');
    downloadFile(urlfile);
});
function downloadFile(urlfile){
    var fname = urlfile.split('/').pop(); 
  
    
    if(pageeapp>0){
$( ".media-folder-list [data-file-name='"+fname+"']" ).each( function(  ) {  
   var tblob = $(this).attr('data-file-blob');
 if(tblob){ urlfile = tblob; }
}); 
        
    }
    
    
    const anchor = document.createElement("a");
  anchor.href = urlfile;
  anchor.download = fname;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

 
}


//video float===================================================================




function videofloat() {
    
    if($('.video-float').length){
       var wind =  $(window).scrollTop();  
     if(pageeapp>0){ wind='0';}     
    
         var videofloat1 =   $('.video-float').offset().top;  
        var videoh =   $('.video-float').outerHeight()+100;  
    var fl = videofloat1 + videoh;
    
       if(fl < wind) { 
		  
       $(".video-float").addClass("video-float-on");
		     $(".video-float").closest('section').addClass('videofloatonsection');
		  
		 if( $(".video-float-on:not(.video-br)").length){ borderRadius(".border-radius-per[data-border-radius].video-float");
				  $(".video-float").addClass("video-br");										 
														 }
	   }
    else{ $(".video-float").removeClass("video-float-on");
		 $('.video-ocultar').removeClass('video-ocultar');
			 if( $(".video-float.video-br").length){ borderRadius(".border-radius-per[data-border-radius].video-float"); }
		 $(".video-float").removeClass("video-br");}
//        $('.videofloatonsection').removeClass('videofloatonsection');
   
  }  
    
}

//accordion===================================================================

pageeprogbar();
//NOTE BAR



function pageeprogbar(e) {
var elemparent = e+' .pagee-prog-bar';
if(e == undefined){elemparent = $('main .pagee-prog-bar');}


$( '.pagee-prog-bar:not(.elem-running):visible' ).each( function(  ) {  
 var idd = $(this).attr('id');
		var rundelay = 'go';
	var runmodal = 'go';
	
if($(this).parents('[open-delay]').length ){ rundelay = '';  if( $(this).parents('[open-delay].open-delay').length  ){ rundelay = 'go';} }
if($(this).parents('.pmodal-content').length ){ runmodal = '';  if( $(this).parents('.modal-open').length  ){ runmodal = 'go';} }
	
	
if( rundelay == 'go' && runmodal == 'go' ){

$(this).addClass('elem-running');
	
var pstart = parseInt($(this).attr('data-pageeprogbar-start'));
	var pstop = parseInt($(this).attr('data-pageeprogbar-stop'));
  var ttime = parseInt($(this).attr('data-pageeprogbar'))*1000;
  var thisnumber = $(this).children('.pagee-prog-bar-number');
  $(this).children('.pagee-prog-bar-inside').css('width', pstart+'%');
  
	
	
    $(this).children('.pagee-prog-bar-inside').animate({

    width: pstop+"%"
  }, ttime, "linear",  function() {
        
       
    actionvisibilityonpage(idd);
        
    });
  
  
 
  jQuery({ Counter: 0 }).animate({ Counter: pstop }, {
    duration: ttime,
    easing: 'linear',
  
    step: function () {
      $(thisnumber).text(Math.ceil(this.Counter)+'%');
    }
  });
	
	
	
}
	
	
	
  
  }); 
}



//accordion===================================================================


 $("body").delegate('.acordion-head', 'click', function (){
   
$(this).toggleClass('act');
$(this).parent().siblings().children('.acordion-head').removeClass('act');
  
});



 $("body").delegate('.page-drop-menu', 'mouseenter', function (){
   
dropmenu();
});

dropmenu();

function dropmenu() {

    var mob = $('.page-center.mobile').length;
    var contentbody = $('#body').width();
    var menuposition = '';
     var bodypoasition = $('#body').offset().left;

//console.log(contentbody);
$( ".page-drop-menu" ).each( function(  ) {  

  menuposition = $(this).offset().left - bodypoasition;

    
   
    
 var  compact = $(this).attr('dropmenucompact');  
  var bar =   $(this).attr('dropmenubar'); 
    
          if( contentbody < compact){ $(this).addClass('dropmenucompact'); }
      if(contentbody > compact){ $(this).removeClass('dropmenucompact'); }
    
 
    
       if(contentbody < bar){ $(this).addClass('dropmenubar'); }
     if(contentbody > bar){ $(this).removeClass('dropmenubar'); }
    
    if( menuposition >  (contentbody/2)){ $(this).addClass('dropmenuright')}
    if( menuposition <  (contentbody/2)){ $(this).removeClass('dropmenuright')}

  }); 
    
    
    
    
}
//reveal===================================================================


//autored===================================================================
// remove auto-red-act / auto-red-time
function autored(){
$("body:not(.page-edite) [auto-red]:visible:not(.auto-red-act)").each(function(){
     var thishas = $(this).children('a').length;
  var cap = $(this).hasClass('fcaptcha'); 
     var capact = $(this).hasClass('act'); 
    var idd = $(this).attr('id');
if(cap == true && capact == false){console.log('d');}
   else{ 
      
 
  if($(this).attr('auto-red-time')){
      
  var atualtime =  parseInt( $(this).attr('auto-red-time') )+1;
    $(this).attr('auto-red-time',atualtime );
    var val = parseInt($(this).attr('auto-red') );
   
    if(atualtime>=val){
                         
             if($('.preview-iframe').length){
                
                 if(thishas<1){ var redlink = $(this).attr('temphref');}
                    else{ var redlink = $(this).children('a').attr('temphref');}
               window.parent.postMessage({ action: "callParentFunction", payload: idd+" - redirect to: "+redlink }, "*");
                 
              
                 $(this).addClass('auto-red-act');
               alert('auto redirect: '+redlink);
             }
                       else{
                       if(thishas<1){ var redlink = $(this).attr('href');}
                    if(thishas>0){ var redlink = $(this).children('a').attr('href');}
                           
                     if(redlink == undefined){}
                      else{window.location.href = redlink;}
                        
                      
                      }
  }
        }
  else{$(this).attr('auto-red-time',0);    }
 
  

 
    
}
});
  
}

//modal===================================================================
 $("body ").delegate('.fcaptchacheck', 'click', function (e){

 $(this).parent().addClass('act');
  
});

//modal===================================================================





 $("body ").delegate('.pmodal-close', 'click', function (e){
$(this).parents('.modal-open').removeClass('modal-open');
  
});






//accordion===================================================================


 $("body").mousedown( function(e){
   
 if( $(e.target).parents('.page-drop-menu').length == false && $(e.target).parents('#body').length == true) {
    $(".page-drop-menu" ).removeClass('act');
  }    

});

 $("body ").delegate('.page-drop-menu >  .icone', 'mouseup', function (e){
   if( $(this).parent().hasClass('act')){$(this).parent().removeClass('act');}
     
     
     else{$(this).parent().addClass('act');}

     
     


  
});








//element delay===================================================================





// function delayelement() {
    
    
     
    
//       $( "body:not(.page-edite) [open-delay]" ).each( function(  ) {  
//    var delayelem = $(this).attr("open-delay");
          
//  var a = delayelem.split(':');
// var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
//     if(timerpage >= seconds){ 
//   $(this).addClass('open-delay');
        
      
        
      
        
// 	pageeprogbar('.open-delay');
 
       
//         }
          

 
  
//   }); 
    
    
    
    
//          $( "body:not(.page-edite) [hidden-delay]" ).each( function(  ) {  
//    var delayelem = $(this).attr("hidden-delay");
          
//  var a = delayelem.split(':');
// var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
//     if(timerpage >= seconds){ 
//   $(this).addClass('hidden-delay');
  
       
//         }
          

 
  
//   }); 
    
    
    
 
    
    
// $( "#preview" ).mousedown( function() {   timerpage = 0;  $('.open-delay').removeClass('open-delay');  $('.hidden-delay').removeClass('hidden-delay'); }); 
    
// }


//element delay===================================================================



//element delay===================================================================

var maleName = [
  "Miguel","Davi","Gabriel","Arthur","Lucas","Matheus","Pedro","Guilherme","Gustavo","Rafael",
  "Felipe","Bernardo","Enzo","Nicolas","João","Pedro","Pedro","Henrique","Cauã","Vitor",
  "Eduardo","Daniel","Henrique","Murilo","Vinicius","Samuel","Pietro","João","Vitor","Leonardo",
  "Caio","Heitor","Lorenzo","Isaac","Lucca","Thiago","João","Gabriel","João","Theo",
  "Bruno","Bryan","Carlos","Eduardo","Luiz","Felipe","Breno","Emanuel","Ryan","Vitor",
  "Hugo","Yuri","Benjamin","Erick","Enzo","Gabriel","Fernando","Joaquim","André","Tomás",
  "Francisco","Rodrigo","Igor","Antonio","Ian","Luiz","Otávio","Juan","João","Guilherme",
  "Diogo","Otávio","Nathan","Calebe","Danilo","Luan","Luiz","Henrique","Kaique","Alexandre",
  "João","Miguel","Iago","Ricardo","Raul","Marcelo","Julio","César","Cauê","Benício",
  "Vitor","Gabriel","Augusto","Pedro","Lucas","Luiz","Gustavo","Giovanni","Renato","Diego",
  "João","Paulo","Renan","Luiz","Fernando","Anthony","Lucas","Gabriel","Thales","Luiz",
  "Miguel","Henry","Marcos","Vinicius","Kevin","Levi","Enrico","João","Lucas","Hugo",
  "Luiz","Guilherme","Matheus","Henrique", "Alessandro", "Caetano", "Duarte", "Elias", "Fábio", "Geraldo", "Heitor", "Ícaro", "Joel", "Kauê",
  "Lázaro", "Mateus", "Natan", "Olavo", "Paulo", "Quirino", "Rômulo", "Sandro", "Tiago", "Ulisses",
  "Valter", "Wesley", "Xavier", "Yago", "Zeca", "Adriano", "Bruno", "Caio", "Danilo", "Eliezer",
  "Felipe", "Gilberto", "Henrique", "Isaac", "João", "Kevin", "Leonardo", "Marcelo", "Nicolas", "Otávio",
  "Patrick", "Quintino", "Rafael", "Samuel", "Thiago", "Ubirajara", "Vladimir", "Wilson", "Yuri", "Zeno",
  "Antônio", "Breno", "Cristiano", "Diego", "Emanuel", "Fernando", "Gustavo", "Heitor", "Igor", "Jorge",
  "Kaio", "Leandro", "Mateus", "Nathan", "Otto", "Pedro", "Ruan", "Silvio", "Thiago", "Ulisses",
  "Valdir", "Wagner", "Xande", "Ygor", "Zion", "Alexandre", "Bernardo", "Carlos", "Daniel", "Eduardo",
  "Felipe", "Guilherme", "Henrique", "Ian", "João", "Lucas", "Marcos", "Natan", "Oliver", "Paulo",
  "Rafael", "Sérgio", "Tiago", "Vinicius", "Washington", "Yves", "Zé", "Augusto", "Bruno", "César",
  "Diego", "Elton", "Fernando", "Gabriel", "Hugo", "Ícaro", "Jonas", "Kleber", "Levi", "Miguel",
  "Noah", "Otávio", "Pietro", "Renato", "Sandro", "Thiago", "Vitor", "Washington", "Yuri", "Zacarias",
  "Adalberto","Baltazar","Cícero","Dario","Edison","Fábio","Geraldo","Horácio","Ítalo","Júlio",
  "Kauê","Lúcio","Maurício","Nelson","Olavo","Pablo","Quirino","Roberto","Sávio","Túlio",
  "Ubiratan","Valter","Waldemar","Xavier","Yago","Zacarias","Alberto","Benedito","Caetano","Davi",
  "Ezequiel","Francisco","Gilmar","Heitor","Ivo","Josué","Kelvin","Leandro","Marcel","Nilo",
  "Otto","Paulo","Quintino","Rodrigo","Saulo","Tadeu","Ulisses","Valdir","Wilson","Xande",
  "Yves","Zeno","Alex","Bráulio","César","Diego","Eliezer","Fausto","Guilherme","Humberto",
  "Ismael","Jair","Klaus","Luiz","Marcelo","Nelson","Orlando","Pedro","Raul","Silas",
  "Tadeu","Ubirajara","Vítor","Wesley","Xandinho","Ygor","Zé","Antônio","Bruno","Carlos",
  "Diego","Edson","Felipe","Gilberto","Hugo","Ítalo","João","Kaique","Levi","Marcos",
  "Natan","Omar","Patrick","Raul","Sérgio","Thiago","Valdir","Washington","Yuri","Zacarias"
];

var femaleName = [
  "Julia","Sophia","Isabella","Maria","Eduarda","Manuela","Giovanna","Alice","Laura","Luiza",
  "Beatriz","Mariana","Yasmin","Gabriela","Rafaela","Maria","Clara","Maria","Luiza","Ana",
  "Clara","Isabelle","Lara","Ana","Luiza","Letícia","Ana","Julia","Valentina","Nicole",
  "Sarah","Vitória","Isadora","Lívia","Helena","Ana","Beatriz","Lorena","Clara","Larissa",
  "Emanuelly","Heloisa","Marina","Melissa","Gabrielly","Eduarda","Maria","Fernanda","Rebeca","Amanda",
  "Alícia","Bianca","Lavínia","Fernanda","Ester","Carolina","Emily","Cecília","Maria","Júlia",
  "Pietra","Ana","Carolina","Milena","Marcela","Laís","Natália","Maria","Bruna","Camila",
  "Luana","Ana","Laura","Catarina","Maria","Vitória","Maria","Alice","Olivia","Agatha",
  "Mirella","Sophie","Stella","Stefany","Isabel","Kamilly","Elisa","Luna","Eloá","Joana",
  "Mariane","Bárbara","Juliana","Rayssa","Alana","Ana","Sophia","Ana","Lívia","Caroline",
  "Brenda","Evelyn","Débora","Raquel","Maitê","Ana","Nina","Maria","Sophia","Maria",
  "Cecília","Luiza","Antonella","Jennifer","Betina","Mariah","Sabrina",
  "Aline", "Amanda", "Andressa", "Angelina", "Anita", "Antônia", "Aparecida", "Ariane", "Arlete", "Aurora",
  "Bárbara", "Beatriz", "Bel", "Benedita", "Bernadete", "Bruna", "Camila", "Carina", "Carla", "Carmem",
  "Carolina", "Cássia", "Catarina", "Cecília", "Celina", "Clara", "Claudia", "Cibele", "Cristina", "Daisy",
  "Daniela", "Daphne", "Diana", "Dulce", "Edna", "Eliane", "Ellen", "Elisa", "Elizabete", "Emília",
  "Emilly", "Emily", "Emanuelle", "Estela", "Ester", "Eva", "Fabiana", "Fátima", "Fernanda", "Flávia",
  "Gabriela", "Giselle", "Glória", "Graziella", "Helena", "Heloísa", "Helô", "Iara", "Ilana", "Isadora",
  "Isabel", "Isabela", "Isis", "Ivana", "Janaína", "Janaina", "Jéssica", "Joana", "Júlia", "Juliana",
  "Karla", "Kátia", "Kely", "Laís", "Lara", "Larissa", "Lavinia", "Laura", "Lívia", "Lorena",
  "Lourdes", "Luciana", "Luiza", "Luna", "Luzia", "Madalena", "Maíra", "Manuela", "Marcela", "Marcia",
  "Margarida", "Maria", "Maria Clara", "Maria Eduarda", "Maria Fernanda", "Maria Luiza", "Mariana", "Marina", "Marisa", "Marta",
  "Melissa", "Michele", "Mirella", "Mônica", "Nádia", "Naiara", "Nara", "Nathália", "Nicole", "Nina",
  "Norma", "Olga", "Patrícia", "Paula", "Paulina", "Pietra", "Priscila", "Raquel", "Rebeca", "Renata",
  "Rita", "Roberta", "Rosana", "Rosa", "Ruth", "Sabrina", "Samara", "Sandra", "Sara", "Sílvia",
  "Simone", "Sofia", "Stella", "Suellen", "Suzana", "Tainá", "Tatiana", "Thais", "Valentina", "Valéria",
  "Vanessa", "Verônica", "Victória", "Vitória", "Wânia", "Yasmin", "Yara", "Yasmina", "Zélia", "Zoraide",
  "Abigail","Adriana","Aline","Alessandra","Alexandra","Alice","Alícia","Amanda","Ana Paula","Andreia",
  "Angela","Angelica","Annelise","Antonia","Antonieta","Aparecida","Barbara","Beatriz","Bianca","Brenda",
  "Bruna","Carla","Caroline","Catarina","Cecilia","Celia","Claudia","Daniela","Diana","Dulce",
  "Eliana","Elisa","Elisabeth","Elizabeth","Emily","Estefânia","Evelyn","Fabiana","Fernanda","Flavia",
  "Francisca","Gabrielle","Geovana","Gisele","Glauce","Graziela","Helena","Heloisa","Iara","Irene",
  "Isabel","Isabela","Isadora","Jacqueline","Jaqueline","Jéssica","Joana","Júlia","Juliana","Karen",
  "Karina","Karla","Kátia","Laís","Larissa","Letícia","Lilian","Lívia","Lorena","Luciana",
  "Luiza","Luzia","Madalena","Maíra","Manuela","Marcela","Marcia","Margarida","Maria Eduarda","Maria Fernanda",
  "Maria Luiza","Mariana","Marina","Marisa","Marta","Melissa","Michele","Milena","Mirella","Mônica",
  "Nádia","Nair","Nathalia","Nicole","Nina","Olga","Patrícia","Paula","Paula Cristina","Priscila",
  "Rafaela","Raquel","Rebeca","Renata","Rita","Roberta","Rosa","Rosana","Sabrina","Samara",
  "Sandra","Sara","Silvia","Simone","Sofia","Stella","Suellen","Tatiana","Thaís","Valéria",
  "Vanessa","Verônica","Victoria","Vitória","Yasmin","Yara"
];

var allName = maleName.concat(femaleName);


var rlastname = [
  "da Silva","dos Santos","Pereira","Alves","Ferreira","de Oliveira","Silva","Rodrigues","de Souza","Gomes",
  "Santos","Oliveira","Ribeiro","Martins","Gonçalves","Soares","Barbosa","Lopes","Vieira","Souza",
  "Fernandes","Lima","Costa","Batista","Dias","Moreira","de Lima","de Sousa","Nunes","da Costa",
  "de Almeida","Mendes","Carvalho","Araujo","Cardoso","Teixeira","Marques","do Nascimento","Almeida","Ramos",
  "Machado","Rocha","Nascimento","de Araujo","da Conceiçao","Bezerra","Sousa","Borges","Santana","de Carvalho",
  "Aparecido","Pinto","Pinheiro","Monteiro","Andrade","Leite","Correa","Nogueira","Garcia","de Freitas",
  "Henrique","Tavares","Coelho","Pires","de Paula","Correia","Miranda","de Jesus","Duarte","Freitas",
  "Barros","de Andrade","Campos","Sántos","de Melo","da Cruz","Reis","Guimaraes","Moraes","do Carmo",
  "dos Reis","Viana","de Castro","Silveira","Moura","Brito","Neves","Carneiro","Melo","Medeiros",
  "Cordeiro","Conceição","Farias","Dantas","Cavalcante","da Rocha","de Assis","Braga","Cruz","Siqueira",
  "Valente", "Vasconcelos", "Vasques", "Teles", "Sousa", "Simões", "Siqueira", "Santos", "Sampaio", "Ramos",
  "Queiroz", "Pimentel", "Pacheco", "Nogueira", "Montenegro", "Menezes", "Lourenço", "Lopes", "Leal", "Lacerda",
  "Lago", "Jesus", "Jardim", "Ibrahim", "Guimarães", "Gouveia", "Furtado", "Freire", "Figueiredo", "Ferraz",
  "Faustino", "Escobar", "Esteves", "Dutra", "Coutinho", "Coelho", "Chaves", "Castro", "Carvalho", "Cavalcanti",
  "Caldeira", "Brito", "Brum", "Bernardo", "Barreto", "Barbosa", "Almeida", "Aguiar", "Abreu", "Azevedo",
  "Amaral", "Afonso", "Araújo", "Barros", "Batista", "Borges", "Braga", "Cardoso", "Carneiro", "Cavalcante",
  "Cerqueira", "Correia", "Costa", "Dantas", "Dias", "Domingos", "Duarte", "Esteves", "Faria", "Fernandes",
  "Fonseca", "Freitas", "Gomes", "Gonçalves", "Guimarães", "Henriques", "Lima", "Lopes", "Machado", "Macedo",
  "Magalhães", "Marques", "Martins", "Melo", "Miranda", "Monteiro", "Moreira", "Nascimento", "Neves", "Nunes",
  "Oliveira", "Pacheco", "Pereira", "Pinto", "Queiroz", "Ramos", "Reis", "Rocha", "Rodrigues", "Rosa",
  "Santos", "Sá", "Silva", "Souza", "Teixeira", "Torres", "Vasconcelos", "Vieira", "Vilar", "Vitorino",
  "Vitti", "Zambrano", "Zanetti", "Zaragoza", "Zeni", "Zilberman", "Zito", "Zucchetti", "Zuniga", "Abreu",
  "Aires", "Albuquerque", "Alencar", "Alves", "Amaral", "Andrade", "Angelo", "Antunes", "Apolinário", "Araújo",
  "Assis", "Athayde", "Avelar", "Barbosa", "Barreto", "Bastos", "Batista", "Benedito", "Bernardo", "Bessa",
  "Bittencourt", "Botelho", "Brandão", "Bruno", "Bueno", "Caetano", "Caldeira", "Calixto", "Camargo", "Campos",
  "Cançado", "Cândido", "Cano", "Capela", "Cardoso", "Carvalho", "Castanho", "Castelo", "Castro", "Cavalcante",
  "Cecílio", "Cerqueira", "Chagas", "Chaves", "Coelho", "Cordeiro", "Correia", "Coutinho", "Cruz", "Curvelo",
  "Dantas", "Delgado", "Diniz", "Domingos", "Duarte", "Fagundes", "Faria", "Farias", "Feliciano", "Fernandes",
  "Ferreira", "Figueiredo", "Figueiroa", "Filipe", "Florêncio", "Fonseca", "Freire", "Freitas", "Gadelha",
  "Galvão", "Garcia", "Gomes", "Gonçalves", "Gouveia", "Guimarães", "Hernandes", "Homem", "Ibrahim", "Jesus",
  "Jordão", "Lacerda", "Lamas", "Lemos", "Leão", "Leite", "Lima", "Lobo", "Lopes", "Machado",
  "Magalhães", "Malheiros", "Mansur", "Marques", "Martins", "Matos", "Medeiros", "Meireles", "Melgaço", "Melo",
  "Meneses", "Mendes", "Mendonça", "Meira", "Mesquita", "Moraes", "Moreira", "Muniz", "Nascimento", "Nóbrega",
  "Nogueira", "Noronha", "Oliveira", "Ortega", "Pacheco", "Padilha", "Paes", "Paim", "Pereira", "Pimentel",
  "Pinheiro", "Pinto", "Pires", "Pontes", "Portela", "Queiroz", "Ramalho", "Ramos", "Rego", "Reis",
  "Ribeiro", "Rios", "Rocha", "Rodrigues", "Rosa", "Rosário", "Sá", "Saldanha", "Sales", "Sampaio",
  "Sanches", "Santos", "Saramago", "Sátiro", "Sena", "Serra", "Silva", "Simões", "Sousa", "Tavares",
  "Teixeira", "Teles", "Torres", "Trindade", "Valente", "Varela", "Vasconcelos", "Vasques", "Veloso", "Viana",
  "Vieira", "Vilela", "Xavier", "Zamora", "Zanetti", "Zarco", "Zarif", "Zeni", "Zonta", "Zuniga"
];















//outpreview();
function gopreview(){
    
    dynamictext();
         $('.stop-action').removeClass('stop-action');
}
function outpreview(){
    
    
         $('.stop-action').removeClass('stop-action');
}




dynamictext();
function dynamictext(){
    
    dynamicdate();
    dynamictextname();
    dynamictextwords();
    dynamictextnumber();
    dynamictimefuc();

    

}




function dynamictextname(e){
    if(e == undefined){ e = ''}
 

    var tedite = $('.page-editeppp').length;
    

     if(tedite == false){
         
        $( "[dynamic-text=randomName]"+e).each( function(  ) {  
        
   
        
        var rfirstname = maleName;
              var sexo =   Math.floor(Math.random() * 2) + 1;
              
        if(sexo == 2){ rfirstname = femaleName;}
           
if($(this).hasClass('malename') || rfirstname == maleName){rfirstname = maleName;   }  
            
 if($(this).hasClass('femalename') || rfirstname == femaleName){rfirstname = femaleName;} 
              
  
var newtext = rfirstname[Math.floor(Math.random() * rfirstname.length)] ;
      
          
           
          $(this).text(newtext);
              
           if($(this).hasClass('rlastname')){
         var newtext2 = rlastname[Math.floor(Math.random() * rlastname.length)] ;                            
           $(this).text(newtext+" "+newtext2)                           
                                             
                                             }    
          

        
        });   
         
         
         
     }
      
    
}



function  dynamictextwords(e){
   if(e == undefined){ e = ''}

    var tedite = $('.page-editeppp').length;
    

     if(tedite == false){
         
 $( "[dynamic-text=dynamicWords]"+e).each( function(  ) {  
                
                var thistext = $(this).text();
                var wrandom = $(this).hasClass('dynamic-words-random');
                 var alldwords = $(this).attr('dynamic-words').split(',');
       
                if(wrandom){
                  var   word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ;
                     
                     if(word1 == thistext){  word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ; }
                    
                     $(this).text(word1);
                 
                    
           
                  
                }
                else{   
                   
                   try {
    alldwords = $(this).attr('dynamic-words').split(thistext+',')[1].split(',');
                  }
       catch (e) {
   alldwords = $(this).attr('dynamic-words').split(',');
                      }
                
                    
                    
                   
                      $(this).text(alldwords[0]); 
                
                    }
         
       
 });



  }}




function dynamictextnumber(e){
    
       if(e == undefined){ e = ''}

    var tedite = $('.page-editeppp').length;
    

     if(tedite == false){
    
    
    
    
    
    $( "[dynamic-text=dynamicNumber]"+e).each( function(  ) {  
    

 
       
              var min = 0,  max = 1000, rmax = 5;
       if($(this).attr('dynamic-number-refresh-max')){  rmax = parseInt($(this).attr('dynamic-number-refresh-max')); }           
       if($(this).attr('dynamic-number-min')){  min = parseInt($(this).attr('dynamic-number-min')); }
       if($(this).attr('dynamic-number-max')){  max = parseInt($(this).attr('dynamic-number-max')); }         
                
          var plus  = Math.floor(Math.random() * (rmax - -rmax + 1) ) + -rmax;    
                
         if($(this).hasClass('dynamic-number-up')){ plus  = Math.floor(Math.random() * (rmax - 0 + 1) ) + 0; }
         if($(this).hasClass('dynamic-number-down')){ plus  = Math.floor(Math.random() * (0 - -rmax + 1) ) + -rmax; }        
               
                  var val= parseInt($(this).text());

     
            if(isNaN(val)){
                val = Math.floor(Math.random() * (max - min + 1) ) + min;
                    if($(this).attr('dynamic-number-start') >= 0){ val = $(this).attr('dynamic-number-start') }
			
            }    
         
                

                
                if(val+plus < min  && $(this).hasClass('dynamic-number-down') == false){plus = rmax}
               if(val+plus > max && $(this).hasClass('dynamic-number-up') ==  false){plus = rmax * -1}
          
                
      
                
                 
          if(val+plus < 1){val =min; plus =0;}
                 if(val+plus < min){val =min; plus =0;}
                if(val+plus > max){val =max; plus =0;}
            
                $(this).text(val+plus);
           
    
    });
    
}}








//function dynamicdate(){
//
//
//$( "[dynamicdatedays]").each( function(  ) {  
//
//    var val = parseInt($(this).attr('dynamicdatedays'));
//  
//    
//
//
//function Tomorrow(date=false) {
//    var givendate = (date!=false) ? new Date(date) : new Date();
//    givendate.setDate(givendate.getDate() + val);
//    var day = givendate.getUTCDate()
//    var month = givendate.getUTCMonth()+1
//    var year = givendate.getUTCFullYear()
//    result = day + "/" + month + "/" + year;
//   
//    
//       const opcoes = {
//    weekday: "long",
//    year: "numeric",
//    month: "long",
//    day: "numeric",
//  };
//    
//     return result;
//    return givendate.toLocaleDateString("pt-BR", opcoes);
//    
//    
//} 
//var day = Tomorrow('2020-06-30');
//    var datechange = Tomorrow();
//    $(this).text(datechange);
//
//    
//    
//   
//  }); 
//
//
//}



function dynamicdate(e){

  if(e == undefined){ e = ''}
$("[dynamicdatedays]"+e).each( function(  ) {  
 var val = parseInt($(this).attr('dynamicdatedays'));
 var ext = $(this).hasClass('dateext');
 var result = '';  
  
var givendate =  new Date();
    givendate.setDate(givendate.getDate() + val);
 
 if(ext){
       const opcoes = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
    result =  givendate.toLocaleDateString("pt-BR", opcoes);}
  
  else{
    const opcoes = {
  year: "numeric",
    month: "numeric",
    day: "numeric",
  };
result =  givendate.toLocaleDateString("pt-BR", opcoes);}
  
    

    $(this).text(result);
 }); 
}


function dynamictimefuc(e){

      if(e == undefined){ e = ''}
    $( "[dynamicminutes]"+e).each( function(  ) {  
        
         var val = parseInt($(this).attr('dynamicminutes'))*1000;
        
var dynamictime = new Date();
var Time = dynamictime.setTime(dynamictime.getTime() + val * 60);


var date = new Date(Time);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 $(this).text(formattedTime);
        
         }); 

}




//   



//////////////////////////////////////////////////////////////////////////////////////////////////
//  Cookie
//////////////////////////////////////////////////////////////////////////////////////////////////



function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

setCookie('a1', 'testea1', 99);
var c1 = getCookie('a1');





// function delayelementsetcookie(){
//      $( "body:not(.page-edite) [open-delay][pagee-elem-delay-cookie].open-delay" ).each( function(  ) {  
         
//           var idd = $(this).attr('id'); 
//           var time = $(this).attr('pagee-elem-delay-cookie');
//       setCookie(idd, 'open-delay', time); 
//           }); 
    
//       $( "body:not(.page-edite) [hidden-delay][pagee-elem-delay-cookie].hidden-delay" ).each( function(  ) {  
         
//           var idd = $(this).attr('id'); 
//           var time = $(this).attr('pagee-elem-delay-cookie');
//       setCookie(idd, 'hidden-delay', time); 
//           }); 
// //    
// //     $( "body:not(.page-edite) [pagee-elem-delay-cookie].pagee-audio-master-show-act" ).each( function(  ) {  
// //         
// //          var idd = $(this).attr('id'); 
// //          var time = $(this).attr('pagee-elem-delay-cookie');
// //      setCookie(idd, 'pagee-audio-master-show-act', time); 
// //          }); 
// //    
// //     $( "body:not(.page-edite) [pagee-elem-delay-cookie].pagee-audio-master-hidden-act" ).each( function(  ) {  
// //         
// //          var idd = $(this).attr('id'); 
// //          var time = $(this).attr('pagee-elem-delay-cookie');
// //      setCookie(idd, 'pagee-audio-master-hidden-act', time); 
// //          }); 
    

    
// }

elementcheckcookie();
function elementcheckcookie(){
     $( "body:not(.page-edite) [pagee-elem-delay-cookie]" ).each( function(  ) {  
         
          var idd = $(this).attr('id'); 
         var co = getCookie(idd);
         
         
   
  $(this).addClass(getCookie(idd));
          }); 
    
    
    

    
}





//////////////////////////////////////////////////////////////////////////////////////////////////












// carousel===================================================================



  $('body').delegate('.carousel-dot-right:not(.stoped)','click',function () {
      var stoped = $(this).hasClass('stoped') ;
    var idparent = $(this).parents('.pagee-carousel').attr('id');
      
       var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
      
    var  tw1 = $(this).siblings('.carousel-content').outerWidth();
      var  tw2 = $(this).siblings('.carousel-content').children('.carousel-card').length;
      var  tw3 = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth();
      
      var tw4 = (((tw2*tw3)-tw1)/2)+((cardgap/2)*(tw2-1));
    if(tw1 < 500){     tw4 =tw4-((tw3/2)+(cardgap/2));}

  
    



      
        if($(this).parent('.pagee-carousel.carousel-full').length){ 
          $(this).siblings('.carousel-content').scrollLeft(0); 
                                                                }
  if($(this).parent('.pagee-carousel.carousel-full').length == false){ 
      
      if(tw2 % 2 == 1){
          
          tw4 = tw4- ((tw3+cardgap)/2);
        
      }
 
      $(this).siblings('.carousel-content').animate({scrollLeft: tw4});  
      

  
  }
   
   

      
      
      var  cardWidth = tw3+cardgap;
          $(this).addClass('stoped');
        setTimeout(function(){  $("#"+idparent+" .carousel-dot-right").removeClass('stoped');     }, 400); 
     

        var firstChildAppend = $("#"+idparent+" .carousel-card:first-of-type()").clone();
      
        $("#"+idparent+" .carousel-card").css('margin-left', '0');
 
      $("#"+idparent+" .carousel-card:first-of-type()").css('margin-left', '-'+cardWidth+'px');

    
       
      $("#"+idparent+" .carousel-content").append(firstChildAppend);
       
          setTimeout(function(){ 
        $("#"+idparent+" .carousel-card:first-of-type()").remove();   
                           }, 400); 
    
    });
  
  
  
  
  
  
  
  
  
    // previous-arrow
    $('body' ).delegate('.carousel-dot-left:not(.stoped)','click',function () {
        var idparent = $(this).parents('.pagee-carousel').attr('id');
      // $(this).parents('.pagee-carousel').addClass('act');
      
        var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
     var  cardWidth = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth()+cardgap;
     
           var lastChildAppend = $("#"+idparent+"  .carousel-card:last-child()").clone();
      $("#"+idparent+" .carousel-content").prepend(lastChildAppend);
     
           $("#"+idparent+"  .carousel-card:first-child()").css('margin-left', '-'+cardWidth+'px');
   
        setTimeout(function(){     $("#"+idparent+"  .carousel-card").css('margin-left', '0');}, 10);
       $( "#"+idparent+"  .carousel-card:last-child()").remove(); 
      
    $(this).addClass('stoped');
    setTimeout(function(){  $("#"+idparent+" .carousel-dot-left").removeClass('stoped');     }, 400); 
  
    
    });



  $('body:not(.page-edite) .pagee-carousel:not(:hover) .carousel-dot-right').trigger('click');

  if(pagee_edit<1){
setInterval(function () {
    $('body:not(.page-edite) .pagee-carousel.carousel-auto:not(:hover) .carousel-dot-right').trigger('click');
}, 4000);
  }




//fim carousel===================================================================








elem3d();


function elem3d() {
$( ".mockup-3d" ).each( function(  ) {  
  var wi = $(this).outerWidth();
    var scale = $(this).attr('data-3dscale');
   
  $(this).children().children('.mockup-3d-center').css('transform', 'scale('+((wi/1000)/100)*(scale)+')');
   
  }); 
}











 $( "html" ).delegate('body:not(.page-edite) [data-btn-modal-show]','click', function(  ) {  
        
      var modalshoww = $(this).attr('data-btn-modal-show');
      
     
     $('.pmodal-content:not([data-code-id='+modalshoww+'])').removeClass('modal-open');

$('[data-code-id='+modalshoww+']').toggleClass('modal-open');
	 
	 setTimeout(function () {
pageeprogbar('.modal-open');}, 20);

  }); 


 modalload(); 

function modalload() {
$('.modal-show-load').addClass('modal-open');
}






//NOTE countdown

function countdown() {
   var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  
$( '.pagee-countdown:not(.endcountdown)' ).each( function(  ) {  
var tthis = $(this);
    var idd = $(this).attr('id');
  var EVENTDATE = new Date();
 var now = new Date().getTime();
 
  
  
if($(this).attr('todate')){  EVENTDATE = $(this).attr('todate');
         var countDown = new Date(EVENTDATE).getTime();  }
  
if($(tthis).attr('countdowntime')){ 
 var  t1 = $(this).attr('countdowntime').split(':');
	var th = parseInt(t1[0] * 60 * 60);
	var tm = parseInt(t1[1] * 60);
	var ts =parseInt(t1[2]);
	
var  dtime = (th+tm+ts) * 1000;
	
 if($(tthis).attr('startcountdown') == undefined){ 
    if(pageeapp>0){setCookie(idd, 'l', 0);} 
     
     
     var scountDown ='';
 var cc = getCookie(idd); 
     if(cc){scountDown =cc}
     else{scountDown = new Date().getTime() + dtime;
          if(pageeapp<1){ setCookie(idd, scountDown, 3);}
           }
    
     
  
     
   
 $(tthis).attr('startcountdown', scountDown); 
}
    
var countDown = $(tthis).attr('startcountdown');
  }
      
  
  
     if( (countDown - now) <= 0 ){
         
         
          if( $(this).hasClass('stop-action') == false){
   
        $(this).addClass('stop-action');
           actionvisibilityonpage(idd); 
    }
         
            actionvisibilityonpage(idd);
         countDown = now;
     if($(tthis).hasClass('pagee-countdown-master')) {  $('.finalcountdown-show').addClass('finalcountdown-act');
		$('.finalcountdown-hidden').addClass('finalcountdown-act');
										  
	 }   
								  
		 var countredirect =	$(tthis).attr('countdown-redirect');
								  if(countredirect){
									  if( $('body.pagee-plataforma').length){ 
										   if( $('body.pagee-plataforma.page-preview:not(.coundownredirectgo)').length){
											   $('body.page-preview').addClass('coundownredirectgo');
											   alert('O visitante foi redirecionado para '+countredirect); }
										 }
									  else{  $(tthis).addClass('endcountdown');
                                          
                                          window.location.href = countredirect;}
									
								  }
	}
	
	
  var distance = countDown - now;  
	
	var days = Math.floor(distance / day) ;
	if(days < 10){days = '0'+days}
        $(this).find(".pagee-countdown-days").text( days);
	
		var hours = Math.floor((distance % day) / (hour));
	if(hours < 10){hours = '0'+hours}
     $(this).find(".pagee-countdown-hours").text(hours);
	
	var min = Math.floor((distance % hour) / (minute));
	if(min < 10){min = '0'+min}
        $(this).find(".pagee-countdown-minutes").text(min);
	
	var seg = Math.floor((distance % minute) / second);
	if(seg < 10){seg = '0'+seg}
       $(this).find(".pagee-countdown-seconds").text(seg);
 
  
	    }); 	  
  
  
  
}



//imgzoom








$("html").delegate('body:not(.page-edite) .img-zoom','click', function () {
var imgsrc = $(this).find('img').attr('src');
var ffilter = $(this).find('img').css('filter');	
	

	

	
	
	
$(this).parents('#body').append('<div class="img-zoom-content"><div class="imgzoomeffects"><div class="imgonzoom" style="filter:'+ffilter+'; background-image: url('+imgsrc+')"></div> <svg class="zoomicon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" contenteditable="false"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" contenteditable="false"></path></svg></div></div>'); 
	
if($(this).hasClass('flip-vertical')){ $('.imgonzoom').addClass('flip-vertical')}
if($(this).hasClass('flip-horizontal')){ $('.imgonzoom').addClass('flip-horizontal')}	
	
	setTimeout(function () {
		 $(".img-zoom-content").addClass('act');
}, 50);
});

$("body").delegate('.img-zoom-content','click',function () {

 $(".img-zoom-content").removeClass('act');
 setTimeout(function () {
		 $(".img-zoom-content").remove();
}, 500);
});









$('body ').delegate('.block-tab-head-btn','click', function() {
	
  $(this).addClass('tab-act');
	 $(this).siblings().removeClass('tab-act');
	$(this).parents('.block-tab-head').siblings().removeClass('tab-act');
	
	if( $(this).hasClass('btn-btsa')){ $(this).parents('.block-tab-head').siblings('.btsa').addClass('tab-act');}
	else{$(this).parents('.block-tab-head').siblings('.btsb').addClass('tab-act');}
 
    });








$('body ').delegate('.video-float-label-btn','click', function() {
	
	var val =  $(this).closest('.video').hasClass('video-ocultar');
	
	if(val){ $('.video-ocultar').removeClass('video-ocultar');}
	else{ $(this).closest('.video').addClass('video-ocultar');}
 

 
    });







$('body ').delegate('[siblings-state-group]','mouseup', function() {
	
	var type =  $(this).attr('siblings-state-group');
   
	
   $(this).siblings('[siblings-state-group='+type+']').addClass('siblings-state-slave');
    $(this).removeClass('siblings-state-slave');
    
    
    $('[siblings-state-group='+type+'].siblings-state-slave').each(function(){

        var eshow = $(this).attr('action-elem-visibility-hidden_show');
    
       if(eshow !=undefined){
        
            var HS = eshow;
            try{var HS = $(eshow).replaceAll(',',',#').replaceAll(' ','');}catch{}
  
 
       
     $('#'+HS).removeClass('act-hidden_show');

       
  
       }
        
          var ehidden = $(this).attr('action-elem-visibility-show_hidden');
          if(ehidden !=undefined){
      
            var HS = ehidden;
            try{var HS = $(ehidden).replaceAll(',',',#').replaceAll(' ','');}catch{}

//     $('#'+HS).removeClass('act-hidden_show');
$('#'+HS).addClass('act-show_hidden');
       
  
       }
        
        
        
    });  
    
    
 

 
    });

siblings_state_group_onload();
function siblings_state_group_onload(){
    
  $(".siblings_state_group_onload").each(function(){
$(this).trigger('mouseup');
      $(this).trigger('click');
    });  
    
}








pageeimggallery(); 
function pageeimggallery(){
    $('.pagee-img-gallery-thumb-show').removeClass('pagee-img-gallery-thumb-show');
  $(".pagee-img-gallery-thumb:first-child").each(function(){
  
  
     var bg = $(this).css('background-image');
    $(this).addClass('pagee-img-gallery-thumb-show');
    $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-image',bg);
     $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-full-img').css('background-image',bg); 
         var rad = $(this).css('border-radius');
$(this).parent('.pagee-img-gallery-thumb-list-scroll').css('border-radius',rad);
    });
}


//$("p").click(function(){
//  $('.pagee-img-gallery').toggleClass('pagee-img-gallery-h');
//});

$("body").delegate('.pagee-img-gallery-thumb','click',function(){
  
   $(this).addClass('pagee-img-gallery-thumb-show');
   $(this).siblings().removeClass('pagee-img-gallery-thumb-show');
  var bg = $(this).css('background-image');
    var bgc = $(this).css('background-color');
     var bgp = $(this).css('background-position');
        $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-position',bgp);
//       $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-color',bgc);
$(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-image',bg);
    var rad = $(this).css('border-radius');
$(this).parent('.pagee-img-gallery-thumb-list-scroll').css('border-radius',rad);

});





$("body").delegate('.pagee-img-gallery-amp','click',function(){

    var full = $(this).hasClass('pagee-img-gallery-amp-full');
    
    if(full){
              $(this).removeClass('pagee-img-gallery-amp-full');
     $(this).parents('section').removeClass('pagee-img-gallery-amp-full-section');
       
       
       }
       else{
        $(this).addClass('pagee-img-gallery-amp-full');
     $(this).parents('section').addClass('pagee-img-gallery-amp-full-section');
  
       }

  

 
});








$("body").delegate('.pagee-img-gallery-next','click',function(e){
  
  var lc = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show:last-child').length;

  if(lc>0){var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb:first-child');}
  else{var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show + .pagee-img-gallery-thumb');}

  
 $(el).trigger('click');
   e.stopPropagation();
});


$("body").delegate('.pagee-img-gallery-back','click',function(e){
var fc = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show:first-child').length;
 if(fc>0){ var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb:last-child');}
  else{ var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show').prev();}
  

   $(el).trigger('click');
 e.stopPropagation();
});

//inside pageeapp
$("html").delegate('body.page-edite:has(.pagee-img-gallery-thumb.active)  .images-folder img, body.page-edite:has(.pagee-img-gallery-thumb.active) #background-tools .elem:not(#ctl-bg-color2, #ctl-bg-color, #ctl-bg-mask),#ctl-duplicate','mouseup',function(e){

    
  setTimeout(function () {
		$('.pagee-img-gallery-thumb.active').trigger('click');
}, 500);  
});







$('body').delegate('.hiddenthisopennext','click',function() {

    var pp = $(this).parents('section');
    $(pp).removeClass('btn-show-section');
    $(pp).next('section').addClass('btn-show-section');
     $('.btn-show-section .elem-running').removeClass('elem-running');
     pageeprogbar();
    
});
$('body').delegate('.hiddenthisopenback','click',function() {
    
    var pp = $(this).parents('section');
    $(pp).removeClass('btn-show-section');
    $(pp).prev('section').addClass('btn-show-section');
    
 $('.btn-show-section .elem-running').removeClass('elem-running');
     pageeprogbar();
});

opensectionbtn();
function opensectionbtn(){
    
    
    
$( "section:has(.hiddenthisopennext):first" ).each( function(  ) {  
$(this).addClass('btn-show-section');
    $(this).siblings('section:has(.hiddenthisopennext)').removeClass('btn-show-section');
   
  });     
    
    
    
}





///////////audio

$("body").delegate('.pagee-svg-icon-audio','click',function(){
    
  var idd = $(this).parent().siblings('audio').attr('id')  ;
var audioplayer = document.getElementById(idd);


    if (audioplayer.paused) {audioplayer.play();}   
    else { audioplayer.pause(); }
    
         audioverifystate(audioplayer);
    $(this).toggleClass('pause'); 

    
});

function audioverifystate(audioplayer){
    
  if (audioplayer.paused) { $(audioplayer).parents('.pagee-audio').removeClass('pagee-audio-playing');}   
    else { $(audioplayer).parents('.pagee-audio').addClass('pagee-audio-playing');}
    }
   
function pageeaudioplayer(){
    
    
      $("body:not(.page-edite) .pagee-audio audio").each(function(){ 
   var idd = $(this).attr('id')  ;
var audioplayer = document.getElementById(idd);
          audioverifystate(audioplayer);
 
    var duration = audioplayer.duration ;
      var currentTime = audioplayer.currentTime ;
      var path = 100-(currentTime/(duration/100));
  $(this).parents('.pagee-audio').attr('object_time',currentTime);
          
          
          var atimer = $(this).parents().attr('audiotimer');
    $(this).siblings('svg').children('.js-progress-bar').css("stroke-dashoffset", path);   
      if(atimer && atimer != '0' && atimer !="00:00:00"){
         
          
          var th =  parseInt(atimer.split(':')[0]) * 60 *60;
          var tm = parseInt(atimer.split(':')[1] )* 60;
         
          
          var actiontimer = th + tm +  parseInt(atimer.split(':')[2]);
        
          
//var audioacttimer = (duration)/(100/atimer); 
       
if( currentTime > actiontimer ){



    
    if( $(this).parent('.pagee-audio').hasClass('stop-action') == false){
         var idd = $(this).parent('.pagee-audio').attr('id');
        $(this).parent('.pagee-audio').addClass('stop-action');
           actionvisibilityonpage(idd); 
    }

    

    
    }     
   }
          
          
   
   
  if( currentTime == duration ){
   $(this).parents('.pagee-audio').removeClass('pagee-audio-playing');
      
      
     if( $(this).parent('.pagee-audio').hasClass('stop-action') == false){
         var idd = $(this).parent('.pagee-audio').attr('id');
        $(this).parent('.pagee-audio').addClass('stop-action');
           actionvisibilityonpage(idd); 
    }
    
  }
}); 
    
}






//////////////////////////////////// PAGEEPLAYER API
class YTPageePlayer {
    constructor(selector = '.pagee_player_act') {
      this.selector = selector;
      this.players = {};

      if (document.querySelector(this.selector)) {
        if (!this.isYouTubeApiLoaded()) {
          this.loadYouTubeAPI();
          window.onYouTubeIframeAPIReady = () => this.initPlayers();
        } else {
          this.initPlayers();
        }
      }
    }

    // ✅ Verifica se a API do YouTube já está carregada
    isYouTubeApiLoaded() {
      return typeof window.YT !== 'undefined' && typeof window.YT.Player === 'function';
    }

    // ✅ Carrega o script da API, se necessário
    loadYouTubeAPI() {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }

    // ✅ Inicializa todos os players encontrados no DOM
    initPlayers() {
      document.querySelectorAll(this.selector).forEach(el => {
        const videoElementId = el.id;
        const jqVideoElement = $("#"+videoElementId);
        const oldIframe = jqVideoElement.find("iframe");
        const videoYtId = extrairYouTubeID(oldIframe.attr("src"));
        const videohost = jqVideoElement.hasClass('data-video-nocookie') ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
        var loopstart = jqVideoElement.hasClass('pageeploop'); 
        const ythidden =  jqVideoElement.hasClass('youtube-hidden');
        const videocontinue = el.getAttribute("pageeplayer-continue");
        const videoPlayHiddenDocument = jqVideoElement.hasClass("pageeplayer-playhidden");
        const progbar = jqVideoElement.attr('pageeplayerprogtime');
        var plooptime = jqVideoElement.attr('autoplaylooptime');
        var starttime = getLocalStorage(videoElementId);
        var idVideoIframe = "yt-" + videoElementId;
        
        oldIframe.remove();
        jqVideoElement.find(".videosize").append("<div id='"+ idVideoIframe +"'></div>")

        this.players[videoElementId] = new YT.Player(idVideoIframe, {
          videoId: videoYtId,
          host: videohost,
          playerVars: {
              fs: 0, 
              iv_load_policy:3, 
              disablekb:0, 
              autoplay: 1, 
              mute: 1, 
              controls: 1, 
              rel: 0, 
              showinfo: 0,
              playsinline: 1,
              vq:'small',
              widget_referrer: location.href
          },
          events: {
              onReady: (event) => { 
                    $("#" + idVideoIframe).removeAttr("title");
                    //event.target.playVideo(); // ✅ Força o play se o Frame nao der play 
                     
                    setTimeout(function() {  
                         event.target.setPlaybackQuality('medium');
                    }, 15000); 
                
                    
                    if (videocontinue > 0 && !isNaN(starttime) && starttime > 3){
                        event.target.seekTo(starttime);
                        event.target.mute();
                        event.target.playVideo();

                        jqVideoElement.addClass('pvcontinue');
                        jqVideoElement.removeClass('pageeploop');
                        loopstart = false;
                    }
                    
                    if(loopstart){
                       if(ytPlayerCurrentTime > 0){ 
                        
                            // jqVideoElement.removeClass('pageeploop');  
                       }
                       else
                       {
                        jqVideoElement.addClass('pvplaying');
                            event.target.mute(); 
                            event.target.playVideo(); 
                       }
                    }
                    
                    if(!pagee_edit){
                           setInterval(function () {
                               var ytPlayerCurrentTime = event.target.getCurrentTime();
                               var ytPlayerDuration =  event.target.getDuration();
                               
                               videocallaction(videoElementId, ytPlayerCurrentTime);
                               setLocalStorage(videoElementId, ytPlayerCurrentTime, videocontinue); 
                               jqVideoElement.attr('object_time', ytPlayerCurrentTime);
                               jqVideoElement.attr('object_time_duration', ytPlayerDuration);
                        
                               if(progbar >= 0){
                                    var prog_speed = progbar;  // até onde acelerar (em %)
                                    var resultado = calcularProgressoAcelerado(ytPlayerCurrentTime, ytPlayerDuration, prog_speed);
                                    jqVideoElement.find('.pagee-player-prog div').css('width',resultado+'%' );
                               }
                        
                               if(plooptime>0 && loopstart){
                                   if(ytPlayerCurrentTime >= plooptime  ){
                                       event.target.seekTo(1);
                                    }
                               }
                        }, 500);
                    }
                    
                    //carregar as imagens pause, play e stop (preload de imagem)
                    // setTimeout(function() {  //faz a tela piscar
                    //     jqVideoElement.addClass('playerloadbgimgs'); 
                    //         setTimeout(function() {  
                    //             jqVideoElement.removeClass('playerloadbgimgs'); 
                    //         }, 500); 
                    // }, 5000); 
                    
                    if(videoPlayHiddenDocument){
                        document.addEventListener("visibilitychange", () => { 
                            if (document.hidden) { 
                                setTimeout(function () { 
                                    if (event.target) { 
                                        event.target.playVideo();
                                    } 
                                }, 2000); 
                            }
                        });
                    }
                    
                    $('.video_restart').on('click', function () { //🔴 Precisa ser de acordo ao player
                        jqVideoElement.removeClass('pvcontinue pageeploop');
                        jqVideoElement.addClass('pvcontinueautoplay');//mostra tela cinza transparent / o pause tira
                        
                        event.target.unMute();
                        event.target.setVolume(100);
                        event.target.seekTo(0);
                    });
                   
             },
             onStateChange: (event) => { 
                  jqVideoElement.addClass('playerdesativarclick');
                 
                  setTimeout(function() {  
                      jqVideoElement.removeClass('playerdesativarclick');
                  }, 350); 
                 
                 switch (event.data) {
                      case 0: // Vídeo finalizado
                        event.target.stopVideo();
                        jqVideoElement.removeClass('pvload pvplaying').addClass('pvstop');
                        setTimeout(() => {
                          jqVideoElement.removeClass('pvplaying');
                        }, 150);
                        break;
                    
                      case 1: // Vídeo em reprodução
                        jqVideoElement.removeClass('pvload pvpause pvstop videoload');
                        if (!jqVideoElement.hasClass('pageeploop')) {
                           jqVideoElement.addClass('pvplaying');
                        }
                        break;
                    
                      case 2: // Vídeo pausado
                        jqVideoElement.removeClass('pvload');
                        const shouldContinue =
                          jqVideoElement.hasClass('pageeploop') ||
                          jqVideoElement.hasClass('pvcontinue') ||
                          jqVideoElement.hasClass('pvcontinueautoplay');
                    
                        if (shouldContinue) {
                            jqVideoElement.removeClass('pageeploop pvcontinue pvcontinueautoplay');
                            event.target.unMute();
                            event.target.playVideo();
                        } else {
                          if(jqVideoElement.hasClass('pageeplaynopause')) {
                             event.target.playVideo();
                          } else {
                             jqVideoElement.addClass('pvpause');
                          }
                        }
                        break;
                    
                      case 3: // Buffering
                        setTimeout(() => {
                          if (!jqVideoElement.hasClass('pvplaying')) {
                              jqVideoElement.addClass('pvload');
                          }
                        }, 250);
                        break;
                }
             },
             onAutoplayBlocked: (event) => { 
                alert("Autoplay bloqueado pelo navegador");
            
                // Mostra botão de início manual
                const btn = document.getElementById('inicio');
                btn.style.display = 'block';
            
                btn.addEventListener('click', () => {
                  event.target.playVideo();
                  btn.style.display = 'none';
                });
                
             },
             onError: (event) => { 
                const errorCodes = {
                  2: "ID do vídeo inválido.",
                  5: "Erro de reprodução. Seu navegador pode não suportar este formato.",
                  100: "Vídeo não encontrado ou foi removido.",
                  101: "Este vídeo não permite reprodução externa.",
                  150: "Este vídeo está bloqueado para reprodução em sites externos."
                };
            
                const msg = errorCodes[event.data] || "Erro desconhecido.";
                //document.getElementById("errorMsg").textContent = `Erro ao carregar o vídeo: ${msg}`;
            
                //console.error("Erro no YouTube Player:", event.data);
             }
          }
        });
      });
    }
  }


if(!pageeapp){ // ✅ Executa quando não está dentro do Pagee
  new YTPageePlayer();
}


function extrairYouTubeID(url) {
  // Expressões para todos os formatos possíveis
  const regexList = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,           // embed padrão
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,               // /v/
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,         // /watch?v=
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,                     // youtu.be
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,          // shorts
    /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/,            // live
    /youtube\.com\/embed\/videoseries\?list=([a-zA-Z0-9_-]+)/ // playlists (não vídeo ID, mas detectável)
  ];

  for (const regex of regexList) {
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null; // ID não encontrado
}

function videocallaction(elem, time){
    if(time>.01){ 
       $( "#"+elem).addClass('pvplaying');
    } //caso a api demore para carregar (MAS A API JÁ ESTÁ CARREGADA)
   
    $( "#"+elem+".video[action-elem-visibility-show_hidden].pvplaying, #"+elem+".video[action-elem-visibility-hidden_show].pvplaying" ).each(function() {
        var idd = $(this).attr('id');
        var vtime = $(this).attr('videotimer');
        
        var th = parseInt(vtime.split(':')[0]) * 60 *60;
        var tm = parseInt(vtime.split(':')[1] )* 60;
        var showtime = th + tm +  parseInt(vtime.split(':')[2]);
        
        if(showtime > 0){
            if(time > showtime){
                actionvisibilityonpage(idd)
            }
        }
    });
}

function videoscreens(){
    $(".video").each(function(){
        var ww = $(this).width();
        if(ww < 340){
           $(this).addClass('videozoomcorrect'); 
        }
        else{  
            $(this).removeClass('videozoomcorrect'); 
        }
    });  
}

function calcularProgressoAcelerado(current, duration, prog_speed = 30) {
  if (duration <= 0) 
      return 0;
      
  prog_speed = parseFloat(prog_speed); // garante tipo número
  const videoPercent = (current / duration) * 100;

  // Lógica do fator de aceleração
  let accelerationFactor = 2 + (prog_speed / 50);
 

  // Fase 1: aceleração
  const acelerar = videoPercent * accelerationFactor;

  if (acelerar < prog_speed) {
    return acelerar;
  } else {
    // Fase 2: progressão proporcional até 100%
    const videoToReachSpeed = prog_speed / accelerationFactor;

    const videoFase2 = videoPercent - videoToReachSpeed;
    const duracaoFase2 = 100 - videoToReachSpeed;
    const barraFase2 = 100 - prog_speed;

    const progressoFase2 = (videoFase2 / duracaoFase2) * barraFase2;

    const resultado = prog_speed + progressoFase2;

    // Logs opcionais
    // console.log("Faltam % de vídeo:", 100 - videoPercent);
    // console.log("Avanço fase 2:", progressoFase2.toFixed(2));

    return resultado > 100 ? 100 : resultado;
  }
}

//lazyLoad - quando a API carregar ele remove os Lazy de todos os players da tela.
//

function getHostSeguro() {
  const href = window.location.href;

  if (window.location.protocol === 'file:') {
    // Gera um nome baseado no caminho do arquivo
    const path = href.replace(/^file:\/+/, '');
    const base = path.split(/[\/\\]/).slice(-2).join('_'); // exemplo: pasta_nomearquivo
    return 'localfile_' + base.toLowerCase().replace(/[^a-z0-9_]/g, '');
  }

  return window.location.hostname;
}

function getLocalStorage(key) {
  const host = getHostSeguro();
  const fullKey = `${host}_${key}`;
  const expKey = fullKey + '__expires';
  const now = Date.now();

  const exp = localStorage.getItem(expKey);
  if (exp && now > parseInt(exp)) {
    localStorage.removeItem(fullKey);
    localStorage.removeItem(expKey);
    return null;
  }

  return localStorage.getItem(fullKey);
}

function setLocalStorage(key, value, diasExpiracao = '365') {
  const host = getHostSeguro();
  const fullKey = `${host}_${key}`;
  const expKey = `${fullKey}__expires`;

  const agora = Date.now();
  const tempoExpiracao = agora + diasExpiracao * 24 * 60 * 60 * 1000;

  localStorage.setItem(fullKey, value.toString());
  localStorage.setItem(expKey, tempoExpiracao.toString());
}



//////////////////////////////

//NOTE codeaera
codeaearun();
function codeaearun() {
if(pageeapp<1){
$( ' .codearea .codearea-sub' ).each( function(  ) {  
var code = $(this).attr('codearea-sub-code');
		
	$(this).html('');
	 $(this).html(code);
	    }); 	

}
}

//htmlcode();run inside app

function htmlcode(){
  
  
    $("[codearea-sub-code]:not(.htmlcode-run_shadow)").each(function () {
   var idd = $(this).parent().attr('id');
      $(this).addClass('htmlcode-run_shadow');
      var el = idd+"-rating";
        var codew = $(this).attr('codearea-sub-code');
        var cssin = '<style>.showroot > *{max-width:100%}</style>';
        $(this).append('<template id="c-'+idd+'">'+cssin+'<div class="showroot" style="font-size:0">'+codew+'</div></template>');
    $(this).append('<'+el+'></'+el+'>');
      customElements.define(el,
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const starRating = document.getElementById('c-'+idd).content;
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(starRating.cloneNode(true));
  }
   
});
    
    });
  
  
}


if( $('.keep_screen_active').length>0){

document.addEventListener('visibilitychange', async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
  } catch (err) {
 
  }
});

}



//====================================
//webnario
// Garante que o DOM esteja pronto antes de executar
var webnario_chat_resposta_name ='';
var webnario_chat_resposta_name_class ='';
var webnarioscrolltime = 0;
var webnario_chat_marquee ='';
var webnario_chat_marquee_class ='';


let mensagens = [];
let mensagensExibidas = new Set();
if($('.textareamesage').length){
// Executa após o DOM carregar
$(document).ready(function () {
  const textareaEl = $('.textareamesage');
  let textoOriginal = (textareaEl.val() || '').trim();

  if (!textoOriginal) {
    console.warn('Textarea vazia ou não encontrada.');
    return;
  }



  // Corrige mensagens coladas (sem quebra de linha entre timestamps)
textoOriginal = textoOriginal.replace(/(?=(==\d{2}:\d{2}:\d{2}\|))|(?=(?<!==)\d{2}:\d{2}:\d{2}\|)/g, '\n');
  textoOriginal = textoOriginal.replace(/\n{2,}/g, '\n');

  const linhas = textoOriginal.split('\n');

  mensagens = linhas
    .map(linha => linha.trim())
    .filter(Boolean)
    .map(linha => {
      const right = linha.startsWith('==');
      if (right) linha = linha.slice(2); // remove os dois sinais de igual

      const partes = linha.split('|');
      const time     = partes[0]?.trim() || '';
      const name     = partes[1]?.trim() || '';
      const resposta = partes[2]?.trim() || '';
      const message  = partes.slice(3).join('|').trim() || '';

      return { time, name, resposta, message, right };
    });
});

// Injetor de mensagens no chat
function webnariomesageinject(webnaiotime) {
 
  mensagens.forEach((msg, index) => {
    const [h, m, s] = msg.time.split(":").map(Number);
    const tempoEmSegundos = (h || 0) * 3600 + (m || 0) * 60 + (s || 0);

    if (tempoEmSegundos === webnaiotime && !mensagensExibidas.has(index)) {
      const classeRight = msg.right ? " webnariochat_marquee" : "";

       var marqueestyle ='';
      var marqueeclass = '';
      if(msg.right){
        marqueestyle = webnario_chat_marquee;
      marqueeclass = webnario_chat_marquee_class;
      }
         



      const respostaSpan = msg.resposta
        ? `<span class="webnariochat_message_resposta ${webnario_chat_resposta_name_class}" style="`+webnario_chat_resposta_name+`">${msg.resposta}</span>`
        : "";

      const html = `
        <div class="webnariochat_message ${classeRight}  ${marqueeclass}" style="${marqueestyle}">
          <span class="webnariochat_message_name">${msg.name}:</span>
          ${respostaSpan}
          <span class="webnariochat_message_text">${msg.message}</span>
        </div>
      `;

      $('.webnariochat').append(html);
      mensagensExibidas.add(index);

      // Scroll automático, exceto se mouse estiver sobre
       if(webnarioscrolltime==0){
      $('.webnariochat').scrollTop($('.webnariochat')[0].scrollHeight);
       }
    }
  });
}

}

$('.webnariochat').scroll(function () {
  var $el = $(this); 
  var distanceToBottom = $el[0].scrollHeight - $el.scrollTop() - $el.innerHeight();

  if (distanceToBottom>10) {
    webnarioscrolltime = 15;// define o tempo que a rolagem fica estatica 
  } else {
    webnarioscrolltime = 0; 
  }

});










function webnariostyle(){

webnario_chat_resposta_name = $('.webnariochat_message_referencia .webnariochat_message_resposta').attr('style');
webnario_chat_resposta_name_class =  $('.webnariochat_message_referencia .webnariochat_message_resposta').attr('class').replaceAll('webnariochat_message_referencia', '').replaceAll('active-select', '').replaceAll('active', '');


webnario_chat_marquee = $('.webnariochat_message_referencia_marquee ').attr('style');
webnario_chat_marquee_class =  $('.webnariochat_message_referencia_marquee').attr('class').replaceAll('webnariochat_message_referencia_marquee', '').replaceAll('active-select', '').replaceAll('active', '');

}


// Simulador de tempo
if(pagee_edit<1){

webnariostyle();

let webnaiotime = 0;

       
setInterval(() => {
  // var tt= $('textarea').val();
  // console.log(tt);
   if(webnarioscrolltime>0){webnarioscrolltime = webnarioscrolltime-1;}
  webnariomesageinject(webnaiotime);
  var webnariomasterobj = $('.webnariocontainer').attr('webnario-master');
  var newwebnariotime =  parseInt($('#'+webnariomasterobj).attr('object_time'), 10); 
  if(newwebnariotime>0){ webnaiotime = newwebnariotime }
  
  // webnaiotime++;
}, 1000);
}










const params = new URLSearchParams(window.location.search);
const nome = params.get('webnarioname');

if (nome) {
  // Aplica o nome no atributo
  $('.webnario_input_text').attr('webnario_user', nome);
  $('.webnariogroup:has(.webnario_input_name)').remove();

  // Remove o parâmetro da URL
  params.delete('webnarioname');
  const novaURL = window.location.pathname + '?' + params.toString();
  history.replaceState(null, '', novaURL);
}



$('.webnario_btn_name').click(function() {
  var val = $('.webnario_input_name').val();
  if(val!=''){$('.webnario_input_text').attr('webnario_user',val);
             $(this).parents('.webnariogroup').remove()}

});


$('.webnario_btn_enviar').click(function() {
    var name = $('.webnario_input_text').attr('webnario_user');
    var text = $('.webnario_input_text').val();

    // Detecta palavras que começam com @, ignorando e-mails
    let palavrasComArroba = text.match(/(?:^|\s)@\w+\b/g);

    if (palavrasComArroba) {
        // Remove espaços antes e o caractere @
const nomesMencionados = palavrasComArroba.map(p => p.trim().slice(1).replace(/[.,!?]+$/, ''));

        // Remove as palavras com @ do texto original
        text = text.replace(/(?:^|\s)@\w+\b/g, '').replace(/\s{2,}/g, ' ').trim();

        $('.webnariochat').append(`
            <div class="webnariochat_message webnariochat_message_visitant">
                <span class="webnariochat_message_name">${name}:</span>
                <span class="webnariochat_message_resposta ${webnario_chat_resposta_name_class}" style="${webnario_chat_resposta_name}">${nomesMencionados.join(',')}
                </span>
                <span class="webnariochat_message_text">${text}</span>
            </div>
        `);
    } else {
        $('.webnariochat').append(`
            <div class="webnariochat_message webnariochat_message_visitant">
                <span class="webnariochat_message_name">${name}:</span>
                <span class="webnariochat_message_text">${text}</span>
            </div>
        `);
    }

    // Scroll automático para o final do chat
   
    $('.webnariochat').scrollTop($('.webnariochat')[0].scrollHeight);
    $('.webnario_input_text').val('');
});




$('.webnario_input_text, .webnario_input_name').keypress(function(e) {
   if (e.which === 13) {
    $(this).parent().siblings().trigger('click');
      
  }
});

$('body').on('click', '.webnario_top_chat_all, .webnario_top_chat_suporte', function() {
  $(this).addClass('act');
    $(this).siblings().removeClass('act');
});










// function objectTime(){

//    $("[object-time-action-show]:not(.object-time-action-show-on)").each(function () {
 
// var objmaster = $(this).attr('get-object-time');
// var objmastertime= $('#'+objmaster).attr('object_time');
// var objactiontime = $(this).attr('object-time-action-show');


//  objactionsec = tempoParaSegundos(objactiontime);

// if(objmastertime>objactionsec){
// $(this).addClass('object-time-action-show-on');

// }


// });


//  $("[object-time-action-hidden]:not(.object-time-action-hidden-on)").each(function () {
 
// var objmaster = $(this).attr('get-object-time');
// var objmastertime= $('#'+objmaster).attr('object_time');
// var objactiontime = $(this).attr('object-time-action-hidden');


//  objactionsec = tempoParaSegundos(objactiontime);
// console.log('master'+objmastertime+'objt'+objactionsec);
// if(objmastertime>objactionsec){
// $(this).addClass('object-time-action-hidden-on');

// }


// });
    

// }




function objectTime() {
  $("[object-time-action-show]").each(function () {
    const $el = $(this);
    const objmasterId = $el.attr('get-object-time');
    const $master = $('#' + objmasterId);

    if (!$master.length) return;

    const masterTime = parseFloat($master.attr('object_time')) || 0;
    const actionTime = tempoParaSegundos($el.attr('object-time-action-show'));

    // Restaura classe via cookie (caso já exista)
    restaurarClassePorCookie($el, 'object-time-action-show-on');

    // Aplica se o tempo for atingido
    if (masterTime > actionTime && !$el.hasClass('object-time-action-show-on')) {
      $el.addClass('object-time-action-show-on');
      salvarCookieClasseElemento($el, 'object-time-action-show-on');
    }
  });

  $("[object-time-action-hidden]").each(function () {
    const $el = $(this);
    const objmasterId = $el.attr('get-object-time');
    const $master = $('#' + objmasterId);

    if (!$master.length) return;

    const masterTime = parseFloat($master.attr('object_time')) || 0;
    const actionTime = tempoParaSegundos($el.attr('object-time-action-hidden'));

    // Restaura classe via cookie
    restaurarClassePorCookie($el, 'object-time-action-hidden-on');

    if (masterTime > actionTime && !$el.hasClass('object-time-action-hidden-on')) {
      $el.addClass('object-time-action-hidden-on');
      salvarCookieClasseElemento($el, 'object-time-action-hidden-on');
    }
  });
}

function tempoParaSegundos(strTempo) {
  const [horas, minutos, segundos] = strTempo.split(':').map(Number);
  return (horas * 3600) + (minutos * 60) + segundos;
}

function salvarCookieClasseElemento($el, className) {
  const delay = parseInt($el.attr('pagee-elem-delay-cookie'));
  const elemId = $el.attr('id');
  if (!elemId) return;

  const cookieName = 'pagee_elem_' + className + '_' + elemId;

  // Remove cookie se delay inválido, zero ou negativo
  if (isNaN(delay) || delay <= 0) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    return;
  }

  const cookieValue = '1';
  const date = new Date();
  date.setTime(date.getTime() + (delay * 24 * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();

  document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
}

function restaurarClassePorCookie($el, className) {
  const elemId = $el.attr('id');
  if (!elemId) return;

  const cookieName = 'pagee_elem_' + className + '_' + elemId;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i].trim();
    if (c.startsWith(cookieName + '=')) {
      $el.addClass(className);
      break;
    }
  }
}







