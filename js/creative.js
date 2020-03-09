(function($) {
  "use strict"; // Start of use strict

  var countries = [
    { value: 'Salò', data: 'AD' },
    { value: 'Peschiera del garda', data: 'ZZ' },
    { value: 'Desenzano', data: 'ZZ' },
    { value: 'Limone', data: 'ZZ' },
    { value: 'Riva del Garda', data: 'ZZ' },
    { value: 'Garda', data: 'ZZ' },
    { value: 'Sirmione', data: 'ZZ' },
    { value: 'Malcesine', data: 'ZZ' },
    { value: 'Bardolino', data: 'ZZ' },
  ];  
  var countries2 = [
    { value: 'Salò', data: 'AD' },
    { value: 'Peschiera del garda', data: 'ZZ' },
    { value: 'Desenzano', data: 'ZZ' },
    { value: 'Limone', data: 'ZZ' },
    { value: 'Riva del Garda', data: 'ZZ' },
    { value: 'Garda', data: 'ZZ' },
    { value: 'Sirmione', data: 'ZZ' },
    { value: 'Malcesine', data: 'ZZ' },
    { value: 'Bardolino', data: 'ZZ' },
  ];  
  $('#autocomplete').autocomplete({
      width: 'flex',
      autoSelectFirst: true,
      showNoSuggestionNotice: true,
      noSuggestionNotice: 'Nessun risultato',
      lookup: countries2,
      appendTo: jQuery('.suggestions-1')
  });
  $('#autocomplete2').autocomplete({
    width: 'flex',
    autoSelectFirst: true,
    showNoSuggestionNotice: true,
    noSuggestionNotice: 'Nessun risultato',
    lookup: countries,
    appendTo: jQuery('.suggestions-2')
  });

  var $tabs = $(".content");
  var $buttons = $(".tab");

  $buttons.click(function() {
    var selected = $(this).index();
    TweenMax.to($buttons, 0.5, { opacity: 0.25 });
    TweenMax.to(this, 0.5, { opacity: 1 });

    TweenMax.to($tabs, 0.5, { opacity: 0, delay: 0.5 });
    TweenMax.to($tabs.eq(selected), 0.5, { opacity: 1, delay: 0.5 });
  });

  $('#date-search').dateDropper({
    lang: 'it',
    large: true,
    largeDefault: true,
    lock: 'from',
    format: 'j M Y'
  });
  $('#date-search2').dateDropper({
    lang: 'it',
    large: true,
    largeDefault: true,
    lock: 'from',
    format: 'j M Y'
  });
  $('#date-experience').dateDropper({
    lang: 'it',
    large: true,
    largeDefault: true,
    lock: 'from',
    format: 'D j M Y'
  });
  $('#date-input-mobile').dateDropper({
    lang: 'it',
    large: true,
    largeDefault: true,
    lock: 'from',
    format: 'D j M Y'
  });
  $(".input-toggle").click(function(){
    $(".person-select").toggle();
  });
  $('.mobile-search-input').focus(function(){
    $('.search-mobile-overlay').fadeIn(300);
  });
  $(".filter-btn").click(function(){
    $(".filter-btn").siblings(".filter-poupop").hide();
    $(this).siblings(".filter-poupop").fadeIn(100).addClass('active');
  });
  $(".option-filter").click(function(){
    $(this).toggleClass('active');
  });
  // $(".header-bottom .filter-checkbox").click(function(){
  //   $(this).parent().parent().parent().parent().parent().parent().parent().toggleClass('selected')
  // });
  $(".price-range input").focus(function(){
    $(this).parent().parent().parent().parent().parent().parent().parent().parent().toggleClass('selected');
  });
  
  $(".btn-expe").click(function() {
    $('.poupop-filter-m-expe').fadeToggle(100);
    $('.poupop-filter-m-price').fadeOut(100);
  });
  $(".btn-price").click(function() {
    $('.poupop-filter-m-price').fadeToggle(100);
    $('.poupop-filter-m-expe').fadeOut(100);
  });
  $(".filter-checkbox").click(function(){
    $('.btn-expe').toggleClass('active')
  });

  $('.remove-filter').click(function(){
    $(".filter-checkbox").prop("checked",false);
  });
  
  $('.save-filter').click(function(){
    $(".filter-poupop").fadeOut(100);
    $(".poupop-mobile").fadeOut(100);
  });

  function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });
  

  // Carosello Attività
  $('.activities-carousel').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    responsive:{
      0:{
          items:1
      },
    }
  })

  $('.carousel-experience__init').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
      0:{
          items:1
      },
    }
  })

  $('.carousel-widget').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:2
      },
      576:{
        items: 3,
        margin: 30,
        autoplay:false,
        mouseDrag: false,
      },
      992:{
        items: 1
      },
    }
  })

  if (window.matchMedia("(max-width: 991px)").matches) {
    $('.card-dummy-carousel').owlCarousel({
      loop: false,
      margin: 0,
      nav:false,
      responsiveClass: true,
      responsive:{
        0:{
          items:2.25,
          loop: true,
        },
        576:{
          items:3.25,
          loop: true,
        },
        992:{
          items:6,
          mouseDrag: false,
        }
      }
    })
    // $('.card-dummy-big-carousel').owlCarousel({
    //   loop: false,
    //   margin: 0,
    //   nav:false,
    //   responsiveClass: true,
    //   responsive:{
    //     0:{
    //       items:1.25,
    //       loop: true,
    //     },
    //     576:{
    //       items:2.25,
    //       loop: true,
    //     },
    //     992:{
    //       items:5,
    //       mouseDrag: false,
    //     }
    //   }
    // })
  } 

  $('.featured-places-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav:false,
    responsiveClass: true,
    responsive:{
      0:{
        // stagePadding: 30,
        items: 1.25,
        loop: true,
      },
      576:{
        // stagePadding: 30,
        items: 2.25,
        loop: true,
      },
      992:{
        items:4,
        mouseDrag: false,
      }
    }
  })

  $('.carosello-tab').owlCarousel({
    loop: true,
    margin: 0,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive:{
      0:{
        items:2,
      },
      600:{
        items:2,
      },
      1000:{
        items:3,
        loop: false,
        autoplay:false,
        mouseDrag: false,
      }
    }
  })
  $('li.tab').on('content.active', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    $(".carosello-tab").trigger('refresh.owl.carousel');
  });

})(jQuery); // End of use strict


jQuery(document).ready(function(){
  jQuery(window).scroll(function () {
    if ( jQuery(this).scrollTop() > 120 && !jQuery('.bottom-info-experience').hasClass('open') ) {
      jQuery('.bottom-info-experience').addClass('open');
      jQuery('.bottom-info-experience').slideDown();
    } else if ( jQuery(this).scrollTop() <= 120 ) {
      jQuery('.bottom-info-experience').removeClass('open');
      jQuery('.bottom-info-experience').slideUp();
    }
  });
});


(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
    new SelectFx(el);
  } );
})();

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.header-mobile').addClass('isAttacched');
  } else {
     $('.header-mobile').removeClass('isAttacched');
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  var sidebar = new StickySidebar('.experience-widget', {
    topSpacing: 10,
    bottomSpacing: 60,
    containerSelector: '.experience-info',
    innerWrapperSelector: '.experience-widget-inner',
    resizeSensor: true,
    minWidth: 992,
  });
});