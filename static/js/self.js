const typed = new Typed(`.typed`, {
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});

$(window).scroll(function(){
  scroll = $(window).scrollTop();
  if (scroll > 100) {
    $('.menu').css({"position":"fixed"});
    $('.menu').css({"width":"100%"});
    $('.menu').css({"top":"0"});
    $('.menu').css({"background":"#fff"});
    $('.menu a').css({"color":"#000"});
    $('.logo').css({"color":"#000"});
    $('.menu').css({"box-shadow":"rgba(0, 0, 0, 0.22) 6px 1px 1px"});
    $('.menu').css({"z-index":"100"});
  } else {
    $('.menu').css({"position":"relative"});
    $('.menu').css({"background":"transparent"});
    $('.menu').css({"box-shadow":"0 0 0"});
    $('.menu a').css({"color":"#fff"});
    $('.logo').css({"color":"#fff"});
  }
})

$('.menu-icon').click(function(){
  $('header nav').slideToggle();
})
$(document).ready(function() {
  $('.mapa-llear').imageMapResize();
});