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
  $('.experience .button-group #btn1').trigger('click');

  $('.experience .grid .popup-link').magnificPopup({
      type: 'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      gallery: { enabled: true }
  });

  // Pagepiling
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    anchors: ['home','about','experience','projects','contact'],    
    navigation: {
      bulletsColor: 'null'
    }
  });
});