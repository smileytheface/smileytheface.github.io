//navigation hover effect
const navItems = document.getElementsByClassName('nav-item');
const projectItems = document.getElementsByClassName('project-type');
const stickyNav = document.getElementsByClassName('sticky-nav-item');
const nav = document.getElementsByClassName('sticky-nav')[0];
const topSection = document.querySelector('#top');
const bottomOfTop = topSection.offsetHeight;

const aboutSection = document.querySelector('#about-section');
const resumeSection = document.querySelector('#resume-section');
const projectsSection = document.querySelector('#projects-section');
const contactSection = document.querySelector('#contact-section');
const aboutTop = aboutSection.offsetTop;
const resumeTop = resumeSection.offsetTop;
const projectsSectionTop = projectsSection.offsetTop;
const contactSectionTop = contactSection.offsetTop;

console.log(aboutTop);

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
  if (window.scrollY >= aboutTop - 70) {
    document.body.style.paddingTop = nav.offsetHeight;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }

  if (window.scrollY >= aboutTop - 70 && window.scrollY < resumeTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 0) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
  } else if (window.scrollY >= resumeTop - 21 && window.scrollY < projectsSectionTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 1) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
  } else if (window.scrollY >= projectsSectionTop - 21 && window.scrollY < contactSectionTop - 21) {
    for (i = 0; i < stickyNav.length; i++) {
      if (i != 2) {
        stickyNav[i].style.opacity = '0.3';
      } else {
        stickyNav[i].style.opacity = '1';
      }
    }
  } else if (window.scrollY >= window.height)
}

window.addEventListener('scroll', fixedNav);