$(document).ready(function() {


  
  // Experience
  let $btn_exp = $('.experience .button-group button');
  $btn_exp.click(function(e){
    $('.experience .button-group button').removeClass('active');
    e.target.classList.add('active');
    
    let selector = $(e.target).attr('data-filter');
    $('.experience .grid').isotope({
      filter: selector
    });
    return false;
  })
  // Projects
  let $btn_proj = $('.projects .button-group button');
  $btn_proj.click(function(e){
    $('.projects .button-group button').removeClass('active');
    e.target.classList.add('active');
    
    let selector = $(e.target).attr('data-filter');
    $('.projects .grid').isotope({
      filter: selector
    });
    return false;
  })
  
  $('.experience .grid .popup-link').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    gallery: { enabled: true }
  });
  
  $('.projects .grid .popup-link2').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    gallery: { enabled: true }
  });
  
  // Pagepiling
  // $.fn.pagepiling.moveTo('home');
  $('#pagepiling').pagepiling({
    direction: 'vertical',
    anchors: ['home','about','experience','projects','contact'],    
    navigation: false
  });

  $(document).ready(function(){
    $(this).scrollTop(0)
    window.location.href = '#home';
  });
});