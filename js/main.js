$(document).ready(function() {
  var intros = [
    "Welcome!",
    "What's Crackin?",
    "Yo!",
    "Hey There!",
    "Hi!",
    "Hello!",
    "What's Up?",
    "How's it Going?",
    "How's your day been?"
  ];
  var intro = document.getElementById("randIntro");
  var interval = 3000;
  var inst = setInterval(change, interval);
  // randomNumber = Math.floor((Math.random()*intros.  length));
  function change() {
    randomNumber = Math.floor((Math.random()*intros.  length));
    // intro.eq(intros[randomNumber]).fadeIn(2000).delay(2000).fadeOut(2000,change())
    // intro.innerHTML = intros[randomNumber].fadeIn(2000).delay(2000).fadeOut(2000)
    intro.innerHTML = intros[randomNumber]
  }

  var child = document.getElementById('hidescrollbar');
  child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

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
    $('#pagepiling').pagepiling({
      direction: 'vertical',
      anchors: ['home','about','experience','projects','contact'],    
      navigation: false
    });

  particlesJS.load('particles-js', '/js/particlesjs.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(document).ready(function(){
    intro.innerHTML = intros[0]
    change();
    $(this).scrollTop(0)
    window.location.href = '#home';
  });
});