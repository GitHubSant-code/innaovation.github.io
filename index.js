
//Smooth Scrolling code
$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});


function myFunction() {
  var x = document.querySelector(".navigation");
  var z = document.querySelector(".icon");
  
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.classList.remove("active");
    z.classList.remove("close");
  } else {
    x.style.display = "flex";
    y.classList.add("active");
    z.classList.add("close");
  }
}