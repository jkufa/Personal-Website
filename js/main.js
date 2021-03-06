$(document).ready(function() {

  // Intro Title
  // "¡Hola!",
  // "Bonjour!",
  // "Guten Tag!",
  // "こんにちは!",
  // "你好!",
  // "여보세요!",
   // "مرحبا!",
  // "Happy New Year!"

  var intros = [
    "Welcome!",
    "What's Crackin'?",
    "Yo!",
    "Hey There!",
    "Hi!",
    "Hello!",
    "What's Up?",
    "How's it Going?",
    "Happy New Year!"
  ];
  var intro = document.getElementById("randIntro");
  var interval = 3000;
  var inst = setInterval(change, interval);
  function change() {
    randomNumber = Math.floor((Math.random()*intros.  length));
    intro.innerHTML = intros[randomNumber]
  }

  function showImage() {
    var img = document.getElementById('myImageId');
    img.style.visibility = 'visible';
}

  // Emoji easter egg
  $(function() {
    var clicks = 0;
    var img = document.getElementById('pogu');
    img.style.visibility = 'hidden';
    $(".nav-emoji").click(function() {
      if(clicks >= 50) {
        // document.getElementById("sunglasses").src = '/images/PogU.png';
        img.style.visibility = 'visible';
        document.getElementById('sunglasses').innerHTML = "";

      }
      clicks++;
      // console.log(clicks);
    });
  });

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
  // if(window.innerWidth > 640) {
  //   $('#pagepiling').pagepiling({
  //     direction: 'vertical',
  //     anchors: ['home','about','experience','projects','contact'],    
  //     navigation: false
  //   });
  // }

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