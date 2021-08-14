//navigation hover effect
const navItems = document.getElementsByClassName('nav-item');
const projectItems = document.getElementsByClassName('project-type');
const stickyNav = document.getElementsByClassName('sticky-nav-item');
const nav = document.getElementsByClassName('sticky-nav')[0];
const topSection = document.querySelector('#top');
const bottomOfTop = topSection.offsetHeight;
const timeTrap = document.getElementById('token');

const aboutSection = document.querySelector('#about-section');
const resumeSection = document.querySelector('#resume-section');
const projectsSection = document.querySelector('#projects-section');
const contactSection = document.querySelector('#contact-section');
const aboutTop = aboutSection.offsetTop;
const resumeTop = resumeSection.offsetTop;
const projectsSectionTop = projectsSection.offsetTop;
const contactSectionTop = contactSection.offsetTop;

for (i = 0; i < navItems.length; i++) {
  hoverEffect(navItems, i);
}

for (i = 0; i < projectItems.length; i++) {
  hoverEffect(projectItems, i);
}

function hoverEffect(items, pos) {
  items[pos].addEventListener('mouseover', function () {
    for (y = 0; y < items.length; y++) {
      if (y != pos) {
        items[y].style.opacity = '.3';
      }
    }
  });

  items[pos].addEventListener('mouseout', function () {
    for (y = 0; y < items.length; y++) {
      items[y].style.opacity = '1';
    }
  });
}

function fixedNav() {
  //if user scrolls past beginning splash page, activate navigation that sticks to top
  if (window.scrollY >= aboutTop - 70) {
    document.body.style.paddingTop = nav.offsetHeight;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }

  //detecting what section user is scrolled to
  //if user scrolls into contact section or bottom of page
  if ((window.scrollY >= contactSectionTop - 22) ||
    ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20)) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 3) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
    //next detect if user scrolls into about section
  } else if (window.scrollY >= aboutTop - 70 && window.scrollY < resumeTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 0) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
    //next detect if user scrolls into resume section
  } else if (window.scrollY >= resumeTop - 21 && window.scrollY < projectsSectionTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 1) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
    //next detect if user scrolls into projects section
  } else if (window.scrollY >= projectsSectionTop - 21 && window.scrollY < contactSectionTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 2) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
  }
}

function createTimeTrap() {
  timeTrap.value = CryptoJS.AES.encrypt(JSON.stringify(new Date()), "stopspammingmeplease");
}

window.addEventListener('scroll', fixedNav);
window.onload = function() {
  createTimeTrap();
}