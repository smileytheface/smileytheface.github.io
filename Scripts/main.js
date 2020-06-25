//navigation hover effect
var navItems = document.getElementsByClassName('nav-item');
var projectItems = document.getElementsByClassName('project-type');

hoverEffect(navItems, 0);
hoverEffect(navItems, 1);
hoverEffect(navItems, 2);
hoverEffect(navItems, 3);

for (i = 0; i < projectItems.length; i++) {
  hoverEffect(projectItems, i);
}

function hoverEffect(items, pos) {
  items[pos].addEventListener('mouseover', function() {
    for (y = 0; y < items.length; y++) {
      if (y != pos) {
        items[y].style.opacity = '.3';
      }
    }
  });

  items[pos].addEventListener('mouseout', function() {
    for (y = 0; y < items.length; y++) {
      items[y].style.opacity = '1';
    }
  });
}
