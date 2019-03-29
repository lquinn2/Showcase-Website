
var resetPoint = 450;
var firstActivatePoint = 500;
var secondActivatePoint = 1400;

var resetPointActivated = false;
var firstActivatePointActivated = false;
var secondActivatePointActivated = false;

var sideNav = document.getElementsByClassName('side-nav')[0];


// Inital logo fade in on page load
$('#img-logo-top').css('opacity', '1');
$('#img-logo-bottom').css('opacity', '0');
$('#img-logo-middle').css('opacity', '0');

// Side-nav movement animator
$(window).scroll(function() {
  if (!resetPointActivated) {
    // This one is for scrolling back up
    if($(window).scrollTop() < resetPoint) {
      sideNav.style.top = "480px";

      // Change color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in
      $('#img-logo-top').css('opacity', '1');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (firstActivatePointActivated) {    
    // This one is for scrolling back up
    if(($(window).scrollTop() + $(window).height()) <= 2400) {
      sideNav.style.top = "480px";

      for (var i = 0; i < sideNav.childElementCount; i++) {
        sideNav.children[i].style.color = "white";
      }

      // Change color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', 'white');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '1');
      $('#img-logo-bottom').css('opacity', '0');

      firstActivatePointActivated = false;
      secondActivatePointActivated = false;
    }
  }
  if (!firstActivatePointActivated) {
    if($(window).scrollTop() > firstActivatePoint) {
      sideNav.style.top = "1250px";
      firstActivatePointActivated = true;
    } 
  }
  if (!secondActivatePointActivated) {
    if ($(window).scrollTop() > secondActivatePoint) {
      sideNav.style.top = "2315px";
      for (var x = 0; x < sideNav.childElementCount; x++) {
        sideNav.children[x].style.color = "#19414c";
      }

      // Change color to yellow on hover
      $('nav > a').mouseenter(function() {
        $(this).css('color', '#f1c244');
      }).mouseleave(function() {
        $(this).css('color', '#19414c');
      });

      // Make logo fade in and fade others out
      $('#img-logo-top').css('opacity', '0');
      $('#img-logo-middle').css('opacity', '0');
      $('#img-logo-bottom').css('opacity', '1');

      secondActivatePointActivated = true;
    }
  }
});