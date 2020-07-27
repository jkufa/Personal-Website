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
      type: 'image',
      gallery: { enabled: true }
  });
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
  $('.projects .button-group #btn1').trigger('click');

  $('.projects .grid .popup-link').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
  });

  // Pagepiling
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    anchors: ['home','about','experience','projects','contact'],    
  });
  $('#pagepiling_hor').pagepiling({
    menu: null,
    direction: 'horizontal',
  });
});