//navigation hover effect
const navItems = document.getElementsByClassName('nav-item');
const projectItems = document.getElementsByClassName('project-type');
const stickyNav = document.getElementsByClassName('sticky-nav-item');
const nav = document.getElementsByClassName('sticky-nav')[0];
const topSection = document.querySelector('#top');
const bottomOfTop = topSection.offsetHeight;

hoverEffect(navItems, 0);
hoverEffect(navItems, 1);
hoverEffect(navItems, 2);
hoverEffect(navItems, 3);

for (i = 0; i < stickyNav.length; i++) {
  hoverEffect(stickyNav, i);
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
  console.log(window.scrollY, bottomOfTop);
  if (window.scrollY >= bottomOfTop - 20) {
    document.body.style.paddingTop = nav.offsetHeight;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixedNav);