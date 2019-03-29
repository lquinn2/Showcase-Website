$(document).ready(function(){
  $("body").css({
    "-moz-transform":"scale(1)",
    "-webkit-transform":"scale(1)",
    "-o-transform":"scale(1)",
    "-ms-transform":"scale(1)"
  });
  document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
      event.preventDefault();//prevent zoom
  });
  var keyCodes = [61, 107, 173, 109, 187, 189];
  $(document).keydown(function(event) {   
    if (event.ctrlKey==true && (keyCodes.indexOf(event.which) != -1)) { 
      event.preventDefault();
    }
  });

  $(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  });
});