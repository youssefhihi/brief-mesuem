// ~~~~~~~~~~~~~~~~~~~FAQ

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));





//~~~~~~~~~~~~~~berger menu
var menuLinks = document.getElementById("menuLinks");
function showMenu(){
  menuLinks.style.right = "0";
}
function hideMenu(){
  menuLinks.style.right = "-400px";
}













// function validationForm() {
//   var fullname = document.getElementById("fullname").value;
//   var email = document.getElementById("email").value;
//   var cin = document.getElementById("cin").value;
//   var num = document.getElementById("num").value;

//   var fullnameRegx = /^[a-zA-Z ]+$/;
//     const emailRegx = /^[a-zA-Z0-9]+@[a-z]+.com$/;
//     const cinRegx = /^[A-Z]{2}[0-9]{5}$/;
//     const numRegx = /^[0-9]{10}/;

//     if (!fullname.match(fullnameRegx)) {
//       alert("Nom incorrect");
//       return false;
//     }
//     if (!email.match(emailRegx)) {
//       alert("Email incorrect");
//       return false;
//     }
//     if (!cin.match(cinRegx)) {
//       alert("CIN incorrect");
//       return false;
//     }
//     if (!num.match(numRegx)) {
//       alert("Numéro de téléphone incorrect");
//       return false;
//     }
//     return true;
//   }







