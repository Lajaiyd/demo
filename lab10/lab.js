document.addEventListener("DOMContentLoaded",()=> {
  // Event listeners for focus and blur events on elements with class "hilightable"
  var hilightableElements = document.querySelectorAll(".hilightable");
  //focus event
  hilightableElements.forEach((event)=> {
    event.addEventListener("focus", () => {
      event.classList.add("highlight");
    });
    //blur event
    event.addEventListener("blur", ()=> {
      event.classList.remove("highlight");
    });
  });

  //Event listener for form submission
  var form = document.getElementById("mainForm");
  form.addEventListener("submit",(event)=> {
    // Check required form elements for empty values
    var requiredElements = document.querySelectorAll(".required");
    var isEmpty = false;

    requiredElements.forEach( (element)=> {
      if (element.value === "") {
        element.classList.add("error");
        isEmpty = true;
      }
    });

    // form submission is prevented if empty 
    if (isEmpty) {
      event.preventDefault();
      alert('Empty field(s) required.'); //Alert of required fields
    }
  });
 //Event listener to allow once changes are made
  form.addEventListener("input", (event)=> {
    if (event.target.classList.contains("required")) {
      event.target.classList.remove("error");
    }
  });
});
