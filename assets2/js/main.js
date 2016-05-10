$(document).ready(function(){
  var nav= $('.navbar-fixed-top');
  var distancia = $('.navbar-fixed-top').offset();
  if (distancia.top > 0) {
    nav.removeClass('normal').addClass('efecto');
  }
  $(window).scroll(function(){
    var scroll= $(window).scrollTop();

    if(scroll >= 600){
      nav.removeClass('normal').addClass('efecto');
    } else{
      nav.removeClass('efecto').addClass('normal');
    }
  });
});

var cloudStart = [600, 900, 300, 0, 1200];

  var actualStart = -600;

  var leftBound = window.innerWidth;
  leftBound = leftBound.toString() + 'px';

  for (var i = 0; i < cloudStart.length; i++) {
    if (cloudStart[i] > leftBound) {
      cloudStart[i] = cloudStart[i] % leftBound;
    }
  }

  function moveClouds() {
    $('#cloud1').css({
      right: cloudStart[0]
    });
    $('#cloud1').animate({
      right: leftBound,
    }, 40000, 'linear', function() {
      moveClouds();
    });
    cloudStart[0] = actualStart;

    $('#cloud2').css({
      right: cloudStart[1]
    });
    $('#cloud2').animate({
      right: leftBound,
    }, 11000, 'linear', function() {
      moveClouds();
    });
    cloudStart[1] = actualStart;

    $('#cloud3').css({
      right: cloudStart[2]
    });
    $('#cloud3').animate({
      right: leftBound,
    }, 60000, 'linear', function() {
      moveClouds();
    });
    cloudStart[2] = actualStart;

    $('#cloud4').css({
      right: cloudStart[3]
    });
    $('#cloud4').animate({
      right: leftBound,
    }, 10000, 'linear', function() {
      moveClouds();
    });
    cloudStart[3] = actualStart;

    $('#cloud5').css({
      right: cloudStart[4]
    });
    $('#cloud5').animate({
      right: leftBound,
    }, 20000, 'linear', function() {
      moveClouds();
    });
    cloudStart[4] = actualStart;

    $('#cloud6').css({
      right: cloudStart[5]
    });
    $('#cloud6').animate({
      right: leftBound,
    }, 13000, 'linear', function() {
      moveClouds();
    });
    cloudStart[5] = actualStart;

    $('#cloud7').css({
      left: cloudStart[6]
    });
    $('#cloud7').animate({
      left: leftBound,
    }, 8000, 'linear', function() {
      moveClouds();
    });
    cloudStart[6] = actualStart;
  }

  moveClouds();

(function($) {
  "use strict";
  // Add "loaded" class when a section has been loaded
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $(".section").each(function() {
      var elementTop = $(this).offset().top - $('#header').outerHeight();
      if(scrollTop >= elementTop) {
        $(this).addClass('loaded');
      }
    });
  });

  //map

  function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(19.3594418,-99.258399),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
        };
      
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(19.3594418,-99.258399),
          icon: 'assets/img/htwchico.png'
        });

        var infowindow = new google.maps.InfoWindow({
            content: "<b>I/O Hack</b></br>13-14 de Noviembre</br><a href='https://goo.gl/vXGsRp' target='_blank'>¿Cómo llegar?</a>"
        });

        infowindow.open(map,marker);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

//   options = $.extend({
//     scrollwheel: false,
//     navigationControl: false,
//     mapTypeControl: false,
//     scaleControl: false,
//     draggable: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// }, options);

  // One Page Navigation Setup
  $('.one-page-nav #navigation').singlePageNav({
    offset: $('.one-page-nav').outerHeight(),
    filter: ':not(.external)',
    speed: 750,
    currentClass: 'active',

    beforeStart: function() {
    },
    onComplete: function() {
    }
  });

  // Sticky Navbar Affix
  $('.one-page-nav').affix({
    offset: {
      top: $('#topbar').outerHeight(),
    }
  });

  // Smooth Hash Link Scroll
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !=='none'){
      $(".navbar-toggle").click();
    }
  });

  var $container = $('.portfolio-isotope');
  $container.imagesLoaded(function(){
    $container.isotope({
      itemSelector : '.portfolio-item',
      resizable: true,
      resizesContainer: true
    });
  });

  $('section#challenge a').on('click', function(){
    $('#project-modal img').attr('src', $(this).attr('data-image-url'));
    if ($(this).attr('data') == "texto1") {
        $('#project-modal h3.project-title').html('Reto 1 : Logística');
        $('#project-modal p.prueba').html('<h4><strong>Crear tecnología que eficientice el proceso de transporte de bienes desde el lugar de producción hasta el consumidor final.</strong></h4>');
    }
    if ($(this).attr('data') == "texto2") {
         $('#project-modal p.prueba').html('<h4><strong>¿Cómo hacer tecnología de punta lo suficientemente accesible para que la mayoría de los agricultores mexicanos puedan hacer uso de ella?</strong></h3> Tan sólo en el primer semestre del año 2015, 2.06 billones de dólares han sido invertidos en “startups” enfocados a la tecnología agrícola (Agrotech). Es importante mencionar que el sector agrícola enfrentará enormes retos con la finalidad de alimentar 9.6 billones de personas que la FAO (Food and Agriculture Organization of the United Nations) predice habitarán el planeta en el año 2025; por lo que la producción de comida deberá aumentar forzosamente en un 70% para el año 2050, y esto tendrá que lograrse a pesar de la escasa tierra fértil, el incremento en la necesidad de agua potable y otros factores como el cambio climático, que según un reporte emitido por la ONU puede cambiar severamente el ciclo de plantas y animales.');
         $('#project-modal h3.project-title').html('Reto 2 : Agricultura');
    }
    if ($(this).attr('data') == "texto3") {
         $('#project-modal p.prueba').html('<h4><strong>¿Cómo integras tecnología a los PYMES de México?</strong></h4>En el año 2015, las tiendas han doblado presupuestos con la finalidad de mejorar las estrategias de comunicación directa con sus clientes, ya que las redes sociales y móviles se han convertido en un papel fundamental en la experiencia de compra de la gente. Es importante resaltar que los minoristas han intensificado sus esfuerzos por incorporarse al mercado a través de las tecnologías móviles con funciones como el cumplimiento de pedidos, pagos y programas de lealtad.');
         $('#project-modal h3.project-title').html('Reto 3 : Retail');
    }
    // if(){
    //   $('#project-modal p.prueba').html('Así se puede hacer un texto dinámico chinga!');
    // }
  });

  // filter items when filter link is clicked
  $('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

  $('#contactform').submit(function() {
    var action = $(this).attr('action');
    var values = $(this).serialize();

    $.post(action, values, function(data) {
      $('.results').hide().html(data).slideDown('slow');
      $('#contactform').find('.form-control').val('');
    });
    return false;
  });

  $('.iphone-carousel').on('slid.bs.carousel', function () {
    var carouselData = $(this).data('bs.carousel');
    var currentIndex = carouselData.getActiveIndex();
    $('.section-iphone-features .feature-block').removeClass('active');
    $(".section-iphone-features").find("[data-slide-to='" + currentIndex + "']").addClass('active');
  });
})(jQuery);