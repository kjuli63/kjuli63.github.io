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

  // Send message button: show custom prompt
  const sendBtn = document.getElementById('sendBtn');
  const contactForm = document.querySelector('.contact-form');

  if (sendBtn && contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
      // Create or reuse the prompt
      let prompt = document.getElementById('customPrompt');
      if (!prompt) {
        prompt = document.createElement('div');
        prompt.id = 'customPrompt';
        prompt.style.position = 'relative';
        prompt.style.marginBottom = '18px';
        prompt.style.padding = '16px 32px';
        prompt.style.background = '#0A3C30';
        prompt.style.color = '#D9D7B6';
        prompt.style.fontWeight = 'bold';
        prompt.style.fontSize = '1.15em';
        prompt.style.borderRadius = '12px';
        prompt.style.boxShadow = '0 2px 8px rgba(10,60,48,0.10)';
        prompt.style.textAlign = 'center';
        prompt.style.letterSpacing = '1px';
        prompt.style.zIndex = '10';
        contactForm.parentNode.insertBefore(prompt, contactForm);
      }
      prompt.textContent = 'Thanks for your message';
      prompt.style.display = 'block';
      // Hide after 2.5 seconds
      setTimeout(function() {
        prompt.style.display = 'none';
      }, 2500);
      // Optionally, reset the form
      contactForm.reset();
    });
  }
});