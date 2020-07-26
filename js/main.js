$(document).ready(function() {
  let $btns = $('.experience .button-group button');
  $btns.click(function(e){
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
});