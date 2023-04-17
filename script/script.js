// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
    
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-image");
  var captions = document.getElementsByClassName("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < captions.length; i++) {
    captions[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "block";
  captions[slideIndex-1].classList.add("active");
}


document.querySelector('#contact-form button').addEventListener('click', function(e) {
  e.preventDefault(); // prevent the default form submission
  var form = document.querySelector('#contact-form');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              alert('Thank you for contacting us!');
          } else {
              alert('There was an error sending your message. Please try again later.');
          }
      }
  };
  xhr.send(formData);
});





