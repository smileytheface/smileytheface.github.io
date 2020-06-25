$("#dummy").css('background-color', "#000")

//changing theme from light to dark in bb modal
/*
https://stackoverflow.com/questions/688196/how-to-use-a-link-to-call-javascript/688228#688228
*/
// Wait for the page to load first
window.onload = function () {

  //Get a reference to the link on the page
  var a = document.getElementById("dark-theme-time");

  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function () {

    var modalContent = document.getElementById("BB-modal-content");

    if ($("#BB-modal-content").css("background-color") == $("#dummy").css("background-color")) {
      modalContent.style.backgroundColor = "#FFF";
      $("#BB-modal-content").css('color', '#000');
      $("#dark-theme-time").text("dark theme...");
      $("#BB-image").attr("src", "Images/My_Logos/BB_Logo_No_Text.svg");
      $("#BB-x").css("color", "#000");
    } else {
      modalContent.style.backgroundColor = "#000";
      $("#BB-modal-content").css('color', '#FFF');
      $("#dark-theme-time").text("light theme...");
      $("#BB-image").attr("src", "Images/My_Logos/BB_Logo_Dark_Theme.svg");
      $("#BB-x").css("color", "#FFF");
    }

    return false;
  }
}

// hover effect
let gridImages = document.getElementsByClassName('grid-img');
  
for (var i = 0; i < gridImages.length; i++) {
  if(gridImages[i].getAttribute('data-toggle') == "modal") {
    hoverEffect(gridImages, i);
  }
}

function hoverEffect(items, pos) {
  items[pos].addEventListener('mouseover', function () {
    items[pos].style.cursor = "pointer";
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
