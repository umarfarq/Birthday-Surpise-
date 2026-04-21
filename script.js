// Birthday Wish Interactive Script
// Mobile-friendly, passcode 2204, falling text, photos, quotes

let currentPage = 1;
let passcode = '';
const correctPasscode = '2204';
const music = document.getElementById('bgMusic');

// Falling Words & Emojis Particles (Happy, Birthday, Almaz, Chopa, Zara, Alu + emojis)
function initFallingText() {
  const container = document.getElementById('fallingContainer');
  const words = ['Happy', 'Birthday', 'Almaz', 'Chopa', 'Zara', 'Alu'];
  const emojis = ['🌸', '🎂', '💖', '👑', '✨', '🎉', '💕', '🌺'];
  
  function createParticle() {
    // 60% words, 40% emojis
    const isWord = Math.random() < 0.6;
    const text = isWord ? words[Math.floor(Math.random() * words.length)] : emojis[Math.floor(Math.random() * emojis.length)];
    
    const particle = document.createElement('div');
    particle.textContent = text;
    particle.classList.add('falling-letter');
    
    // Adjust for word length
    const baseSize = isWord ? 24 : 32;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.fontSize = (Math.random() * 12 + baseSize) + (isWord ? 'px' : 'px');
    particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.whiteSpace = 'nowrap';
    
    container.appendChild(particle);
    
    // Remove after animation (longer for slower fall)
    setTimeout(() => {
      particle.remove();
    }, 12000);
  }
  
  // More frequent spawn for fuller effect
  setInterval(createParticle, 200);
}

// Page Navigation
function nextPage(pageNum) {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  document.getElementById(`page${pageNum}`).classList.add('active');
  currentPage = pageNum;
  
  if (pageNum === 2) typeWriter();
  if (pageNum === 3) initHeartGallery();
  if (pageNum === 5) {
    music.play().catch(() => {}); // Autoplay fallback
    initFallingText();
    showQuotes();
    initPhotoSlider();
  }
}

// Typewriter Effect
function typeWriter() {
  const text = 'I just want to remind you how important you are to me ❤️... something special awaits! 💖';
  const typingEl = document.getElementById('typingText');
  let i = 0;
  
  function type() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
}

// Passcode Logic
function pressKey(num) {
  if (passcode.length < 4) {
    passcode += num;
    document.getElementById('passcodeDots').textContent = '_'.repeat(4 - passcode.length);
  }
}

function clearPasscode() {
  passcode = '';
  document.getElementById('passcodeDots').textContent = '____';
}

function checkPasscode() {
  if (passcode === correctPasscode) {
    fireworks();
    nextPage(5);
  } else {
    alert('Not quite! Try again 😊');
    clearPasscode();
  }
}

// Fireworks on Unlock
function fireworks() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.textContent = ['✨', '🎉', '🎊', '💖'][Math.floor(Math.random() * 4)];
      firework.style.position = 'fixed';
      firework.style.left = Math.random() * 100 + 'vw';
      firework.style.top = Math.random() * 100 + 'vh';
      firework.style.fontSize = '30px';
      firework.style.pointerEvents = 'none';
      firework.style.zIndex = '1000';
      document.body.appendChild(firework);
      
      setTimeout(() => firework.remove(), 2000);
    }, i * 50);
  }
}

// Quotes Animation
function showQuotes() {
  const quotes = [
    '"Happy Birthday! I hope your day is filled with your favorite sweets and cakes, beautiful roses. May this year bring you healing, happiness, and the very best of everything." ',
    '"I ve seen your scars, your flaws, your mood swings, you hungry, dramatic, jealous, tired, messy — everything"!" I’ve seen you on the bad days, the worst days, and the days you didn’t even like yourself.                          And yet, every version of you made me fall in love a little more. And I would say it a million times:           “You are the best thing that has ever happened to me… You are perfect!” May this year bring you endless joy, beautiful moments, and all the love your heart can hold. ✨"',
    '"I promise to annoy you, love you, and stand by you forever 🤭!"',
    '"And yes… you are getting older 😜 but don’t worry, you’re still cute 😂❤️."',
    '"Happy Birthday to my baby,kuchupuchu,bhondu,cutu,shona,mylove,jaan-jaanu, enjoy the 24th trip around the Sun!"'
  ];
  
  quotes.forEach((quote, index) => {
    setTimeout(() => {
      const quoteCard = document.getElementById(`quote${index + 1}`);
      const quoteEl = quoteCard.querySelector('.quote-text');
      quoteEl.textContent = quote;
      quoteCard.classList.add('animate');
    }, index * 800);
  });

}

// Photo Slider (placeholders + her-pic.jpg)
function initPhotoSlider() {
  const photos = [
    'HER/her0.jpg', 'HER/her1.jpeg', 'HER/her2.jpeg', 'HER/her3.jpeg', 'HER/her4.jpeg',
    'HER/her5.jpg', 'HER/her6.jpg', 'HER/her7.png', 'HER/her8.jpg', 'HER/her9.jpg', 'HER/her10.png'
  ];
  
  const gallery = document.querySelector('.photo-gallery');
  photos.forEach((src, index) => {
    const frame = document.createElement('div');
    frame.classList.add('photo-frame');
    frame.innerHTML = `<img src="${src}" alt="Photo ${index + 1}" onerror="this.parentElement.classList.add('photo-placeholder'); this.style.display='none'; this.parentElement.innerHTML='💖';">`;
    gallery.appendChild(frame);
    
    frame.addEventListener('click', () => {
      frame.style.transform = 'scale(1.2) rotate(10deg)';
      setTimeout(() => frame.style.transform = '', 300);
    });
  });
}

// Heart Polaroids Page3 - add after initPhotoSlider
function initHeartGallery() {
  const photos = [
    'US/us0.jpg', 'US/us1.jpeg', 'US/us2.jpeg', 'US/us3.jpeg', 'US/us4.jpeg',
    'US/us5.jpeg', 'US/us6.jpeg', 'US/us7.jpeg', 'US/us8.jpeg', 'US/us9.jpg', 'US/us10.jpeg', 'US/us11.jpg'
  ];
  
  const gallery = document.querySelector('.heart-gallery');
  gallery.innerHTML = ''; // Clear if needed
  photos.forEach((src, index) => {
    const polaroid = document.createElement('div');
    polaroid.classList.add('polaroid');
    polaroid.innerHTML = `<img src="${src}" alt="Polaroid ${index + 1}" onerror="this.parentElement.innerHTML='💕';">`;
    gallery.appendChild(polaroid);
    
    polaroid.addEventListener('click', () => {
      polaroid.style.transform = 'scale(1.15) rotate(8deg)';
      setTimeout(() => polaroid.style.transform = '', 250);
    });
  });
}

// Heart Touch Pop
function createHeartPop(x, y) {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.classList.add('heart-emoji');
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}

// Music Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('musicToggle');
  let playing = false;
  
  toggle.addEventListener('click', () => {
    if (playing) {
      music.pause();
      toggle.textContent = '🔇';
    } else {
      music.play();
      toggle.textContent = '🔊';
    }
    playing = !playing;
  });
  
  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentPage === 4) checkPasscode();
    if (e.key === 'Escape') clearPasscode();
  });
  
  // Touch anywhere for heart pop
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.card') && !e.target.closest('#musicToggle')) {
      createHeartPop(e.clientX, e.clientY);
    }
  }, true);
  
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const rect = document.body.getBoundingClientRect();
    if (!e.target.closest('.card') && !e.target.closest('#musicToggle')) {
      createHeartPop(touch.clientX, touch.clientY);
    }
  }, true);
});
