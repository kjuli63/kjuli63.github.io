// Skills - Show more
const showMoreSkills = document.getElementById('showMoreSkills');
if (showMoreSkills) {
    showMoreSkills.onclick = function() {
        document.getElementById('moreSkills').style.display = 'block';
        showMoreSkills.style.display = 'none';
    }
}

// Travels - Show map
const showMap = document.getElementById('showMap');
if (showMap) {
    showMap.onclick = function() {
        document.getElementById('map').style.display = 'block';
        showMap.style.display = 'none';
    }
}

// Hobbies - Show quote
const showHobbyQuote = document.getElementById('showHobbyQuote');
if (showHobbyQuote) {
    showHobbyQuote.onclick = function() {
        document.getElementById('hobbyQuote').style.display = 'block';
        showHobbyQuote.style.display = 'none';
    }
}

// Fade-in on scroll animation
window.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-in-on-scroll');
  const appearOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    fader.style.opacity = 0;
    fader.style.transform = 'translateY(40px)';
    fader.style.transition = 'opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1)';
    appearOnScroll.observe(fader);
  });

  // Send message button animation (now using sendVideo in contact-illustration)
  const sendBtn = document.getElementById('sendBtn');
  const sendVideo = document.getElementById('sendVideo');
  const contactForm = document.querySelector('.contact-form');

  if (sendBtn && sendVideo && contactForm) {
    sendBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent form submission
      sendBtn.style.display = 'none';
      sendVideo.style.display = 'inline-block';
      sendVideo.currentTime = 0;
      sendVideo.play();
    });

    sendVideo.addEventListener('ended', function() {
      sendVideo.style.display = 'none';
      sendBtn.style.display = 'inline-block';
    });
  }
});