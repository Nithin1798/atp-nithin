const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      


var loc = document.getElementsByClassName('locationjs')[0];
var fol = document.getElementsByClassName('followjs')[0];

    // Add a click event listener to the button
    loc.addEventListener('click', function() {
      // Redirect to another page
      loc.setAttribute('src','images/img8.png');
      loc.setAttribute('width','310.26');
    });
    fol.addEventListener('click', function() {
      // Redirect to another page
      fol.setAttribute('src','images/img 8.png');
    });