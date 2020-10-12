let menuIcon = $('img.menu');
let menuMobile = $('.mobile-menu');

//aplica evento de click para inverter visibilidade do menu mobile
menuIcon.click(function(){
  menuMobile.slideToggle();
});

//evento resize, desaparece o menu-mobile se tela maior que 760px 
$(window).resize(function () { 
  if($(window).width() > 760 && menuMobile.css('display') != 'none') {
    menuMobile.css('display', 'none');
  }
});


$('nav a').click(function(e){
  e.preventDefault();

  var section_id = $(this).attr('href');
  var offsetPixels = $(section_id).offset().top;
  $('html, body').animate({scrollTop:offsetPixels}, 700);

  //return false; //pra nao redirecionar a pagina por ter clica em um link
});
