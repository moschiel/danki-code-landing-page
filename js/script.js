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
