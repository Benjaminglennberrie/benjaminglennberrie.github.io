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



document.addEventListener('DOMContentLoaded', function() {
  // Get the video element
  var video = document.getElementById('heroVideo');

  // Variable to track if the video is paused due to mouse hold
  var isMouseHolding = false;

  // Function to pause the video
  function pauseVideo() {
      // Check if the video is playing
      if (!video.paused) {
          // Pause the video
          video.pause();
      }
  }

  // Function to resume the video
  function resumeVideo() {
      // Check if the video was paused due to mouse hold
      if (isMouseHolding) {
          // Resume the video playback
          video.play();
          // Reset the mouse holding flag
          isMouseHolding = false;
      }
  }

  // Add event listener for mousedown event on the document
  document.addEventListener('mousedown', function(event) {
      // Pause the video
      pauseVideo();
      // Set the flag to indicate mouse holding
      isMouseHolding = true;
  });

  // Add event listener for mouseup event on the document
  document.addEventListener('mouseup', function(event) {
      // Resume the video playback
      resumeVideo();
  });

  // Add event listener for mouseleave event on the document (in case mouse leaves the window while holding down)
  document.addEventListener('mouseleave', function(event) {
      // Resume the video playback
      resumeVideo();
  });
  pauseVideo();
});
