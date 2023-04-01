/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/

//!!!!!!!!!!!!!!!!!! log in verification code !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Get the token value from local storage
const tokenValue = sessionStorage.getItem("token");

// Check if the token value is "1234"
if (tokenValue === "12345") {
  // If the token is "1234", show the element with ID "rolas1"
  const rolas1Element = document.getElementById("rolas1");
  rolas1Element.style.display = "block";
} else {
  // If the token is not "1234", remove the element with ID "rolas1"
  const rolas1Element = document.getElementById("rolas1");
  rolas1Element.parentNode.removeChild(rolas1Element);
  // Redirecting to 
  window.location.href = 'https://eevb.github.io/login-website';

}
