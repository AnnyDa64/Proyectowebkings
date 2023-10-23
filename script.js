let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar a la siguiente diapositiva automáticamente cada 4 segundos
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 4000); // Cambiar cada 4 segundos (4000 milisegundos)
}

autoSlides(); // Iniciar la función de cambio automático

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "50px 5px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}
