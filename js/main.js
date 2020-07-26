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
      verticalCentered: true,
      sectionsColor: [],
      anchors: [],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4']
      },
       normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

  //events
  onLeave: function(index, nextIndex, direction){},
  afterLoad: function(anchorLink, index){},
  afterRender: function(){},
});
});