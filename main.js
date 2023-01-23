const scrollTo = document.querySelector('.scrollTo');
const projects = document.querySelector('#projects');
const preLoader = document.querySelector('.preloader');
const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const projectsBtn = document.querySelector('.projects');
const contactBtn = document.querySelector('.contact');
const heroParagraph = document.querySelector('.heroPara');
const heroH1 = document.querySelector('.heroH1');
const socialMedia = document.querySelector('.social-media');
const email = document.querySelector('.email');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav-bar');
const logo = document.querySelector('.logo');
const about = document.querySelector('#about');
const header = document.querySelector('#header-home');
const open = document.querySelector('.openMenu');
const close = document.querySelector('.closeMenu');

// Scroll for Project Button.
scrollTo.addEventListener('click', e => {
  const proCoords = projects.getBoundingClientRect();
  window.scrollTo({
    left: proCoords.left + window.pageXOffset,
    top: proCoords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // projects.scrollIntoView({ behavior: "smooth" });
});

// Fade In Effect
window.addEventListener('load', () => {
  preLoader.style.display = 'none';
  const li = menu.querySelectorAll('li');
  li.forEach(el => el.classList.add('fadeInTop'));
  heroParagraph.classList.add('fadeInBottom');
  heroH1.classList.add('fadeInBottom');
  scrollTo.classList.add('fadeInBottom');
  socialMedia.classList.add('fadeInBottom');
  email.classList.add('fadeInBottom');
  document.querySelector('#header-home').scrollIntoView({ behavior: 'smooth' });

  // console.log(window.location.href);
});

// Scroll for all nav buttons

const closeHam = () => {
  menuBar.classList.remove('change');
  document.querySelector('.nav').classList.remove('change');
  document.querySelector('.menu-bg').classList.remove('change-bg');
};

const enableScroll = function () {
  window.onscroll = function () {};
};
menu.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('home')) {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    closeHam();
    enableScroll();
  }
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  closeHam();
  enableScroll();
});

//Menu Fade Animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const sibilings = link.closest('#nav-bar').querySelectorAll('.nav-link');

    sibilings.forEach(el => {
      if (el !== link && window.innerWidth > 500) el.style.opacity = opacity;
      logo.style.opacity = opacity;
    });
  }
};
nav.addEventListener('mouseover', e => {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', e => {
  handleHover(e, 1);
});

// Scroll Event

const initialCoords = about.getBoundingClientRect();

let intialScroll = 0;
window.addEventListener('scroll', function () {
  if (window.scrollY > intialScroll || window.scrollY === 0) {
    intialScroll = window.scrollY;
    nav.classList.remove('sticky');
  } else if (window.scrollY < intialScroll) {
    intialScroll = window.scrollY;
    nav.classList.add('sticky');
  }
});

// Intersection API for refrence

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
// if (!entry.isIntersecting) {
//   nav.classList.add('sticky');
// } else {
//   nav.classList.remove('sticky');
// }
// };

// const headerObeserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });
// headerObeserver.observe(header);

// Reveal section on scroll

const revealOnScroll = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.add('show');
    sectionObserver.unobserve(entry.target);
  }
};

const options = {
  root: null,
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(revealOnScroll, options);

const sections = document.querySelectorAll('.section-hidden');
sections.forEach(section => {
  sectionObserver.observe(section);
});

//Hamburger Menu
const disableScroll = function () {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
};
const menuBar = document.querySelector('.menu-bar');
menuBar.addEventListener('click', function () {
  this.classList.toggle('change');
  document.querySelector('.nav').classList.toggle('change');
  document.querySelector('.menu-bg').classList.toggle('change-bg');

  disableScroll();
  // enableScroll();
  menuBar.addEventListener('click', function () {
    enableScroll();
  });
});
