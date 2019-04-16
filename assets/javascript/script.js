
var resetPoint = 450;
var firstActivatePoint = 500;
var secondActivatePoint = 1400;

var resetPointActivated = false;
var firstActivatePointActivated = false;
var secondActivatePointActivated = false;

var sideNav = document.getElementsByClassName('side-nav')[0];


// Initial logo fade in on page load
$('#img-logo-top').css('opacity', '1');
$('#img-logo-bottom').css('opacity', '0');
$('#img-logo-middle').css('opacity', '0');

// Initial menu fade in on page load
$('.side-nav-top').css('opacity', '1');
$('.side-nav-middle').css('opacity', '0');
$('.side-nav-bottom').css('opacity', '0');

// Navigation menu and logo animator
$(window).scroll(function() {
  if (!resetPointActivated) {
    // This one is for scrolling back up
    if($(window).scrollTop() < resetPoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '1');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '1');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (firstActivatePointActivated) {    
    // This one is for scrolling back up
    if(($(window).scrollTop() + $(window).height()) <= 2400) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '1');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '1');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (!firstActivatePointActivated) {
    if($(window).scrollTop() > firstActivatePoint) {
      firstActivatePointActivated = true;
    } 
  }
  if (!secondActivatePointActivated) {
    if ($(window).scrollTop() > secondActivatePoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', '#19414c');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '1');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '1');

      secondActivatePointActivated = true;
    }
  }
});

// Mobile nav menu
var hamburgerMenu = document.getElementById('hamburger-menu');
var dropDownMenu = document.getElementById('menu-dropdown');
var dropDownClose = document.getElementById('dropdown-close');
var html = document.getElementsByTagName('html')[0];
var body = document.getElementsByTagName('body')[0];
var links = document.getElementsByClassName('nav-item');
var dropDownIsOpen = false;

    function preventMotion(event)
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

hamburgerMenu.addEventListener('click', function() {
  dropDownMenu.style.display = "block";
  if (dropDownIsOpen == false) {
    dropDownMenu.style.top = "0vh";
    dropDownIsOpen = true;
    body.style.position = "fixed";
    body.style.overflowX = "hidden";
    body.style.width = "100vw";
    
    window.addEventListener("scroll", preventMotion, false);
    window.addEventListener("touchmove", preventMotion, false);
    

  }
});

dropDownClose.addEventListener('click', function(){
  if (dropDownIsOpen == true) {
    dropDownMenu.style.top = "-100vh";
    setTimeout(dropdown, 5);
    body.style.position = "initial";
    body.style.overflowX = "initial";
    body.style.width = "initial";
    
    window.removeEventListener("scroll", preventMotion);
    window.removeEventListener("touchmove", preventMotion);
  }
  function dropdown(){
    dropDownIsOpen = false;
  }
});


function hideDropdown() {
  setTimeout(dropdown, 10);
  function dropdown(){
    dropDownMenu.style.display = "none";
    dropDownIsOpen = false;
    
    body.style.position = "initial";
    body.style.overflowX = "initial";
    body.style.width = "initial";
    
    window.removeEventListener("scroll", preventMotion);
    window.removeEventListener("touchmove", preventMotion);

    var hash = $(location).attr('hash');
    //console.log(hash);
    switch(hash) {
      case '#top':
        document.getElementById('first-spacer').scrollIntoView(true);
        break;
      case '#about':
        document.getElementById('about').scrollIntoView(true);
        break;
      case '#grid':
        document.getElementById('grid').scrollIntoView(true);
        document.getElementById('grid-desktop').scrollIntoView(true);
        break;
    }
  }
}


function checkScroll() {
  window.scrollBy(0, 1000);
  if (!resetPointActivated) {
    // This one is for scrolling back up
    if($(window).scrollTop() < resetPoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '1');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '1');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (firstActivatePointActivated) {    
    // This one is for scrolling back up
    if(($(window).scrollTop() + $(window).height()) <= 2400) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '1');
      $('#img-logo-bottom').css('opacity', '0');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '1');
      $('.side-nav-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (!firstActivatePointActivated) {
    if($(window).scrollTop() > firstActivatePoint) {
      firstActivatePointActivated = true;
    } 
  }
  if (!secondActivatePointActivated) {
    if ($(window).scrollTop() > secondActivatePoint) {
      // Change nav-item color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', '#19414c');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '1');

      // Make navigation menu fade in and others fade out
      $('.side-nav-top').css('opacity', '0');
      $('.side-nav-middle').css('opacity', '0');
      $('.side-nav-bottom').css('opacity', '1');

      secondActivatePointActivated = true;
    }
  }
}
