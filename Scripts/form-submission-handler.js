let spamDetected = false;
/*
(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    // Adding form values to formData
    fields.forEach(function(nameProperty){
      var element = elements[nameProperty];

      // Renamed fields for catching spam bots
      if (element.name === "name") {
        formData.email = element.value;
      } else if (element.name === "email") {
        formData.name = element.value
      } else if (element.name === "token") {
        const bytes = CryptoJS.AES.decrypt(timeTrap.value, "stopspammingmeplease");
        const timeTrapDate = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        formData.timetrap = timeTrapDate;
      } else {
        // singular form elements just have one value
        formData[nameProperty] = element.value;
      }

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[nameProperty] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;
    const loading = document.getElementById('loading');
    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      spamDetected = true;
      disableAllButtons(form);
      return false;
    }

    const minimumTime = 6000;
    // If it takes shorter than the minimum time to fill out the form, assume it was filled by a spam bot.
    if (Math.abs(new Date() - new Date(data.timetrap)) < minimumTime) {
      spamDetected = true;
      const spamDetectionMessage = document.getElementById('spam-detection-message');
      spamDetectionMessage.style.display = "block";
      disableAllButtons(form);
      return false;
    } else {
      delete data.timeTrap;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          loading.style.display = "none";
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');

    
    if (!spamDetected) {      
      xhr.send(encoded);
      loading.style.display = "block";
    }
  }

  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
*/
