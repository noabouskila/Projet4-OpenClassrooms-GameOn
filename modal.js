// 1) gestion du responsive 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//2) Récupération des éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeMdl = document.querySelector(".close");
const form = document.querySelector('form');
const msgFirst = document.querySelector(".msg-first"); 
const msgLast = document.querySelector(".msg-last"); 
const msgBirthdate = document.querySelector(".msg-birthdate"); 
const msgEmail = document.querySelector(".msg-email"); 
const msgQuantity = document.querySelector(".msg-quantity");
const msgLocation = document.querySelector(".msg-location");
const msgCGU = document.querySelector(".msg-cgu");
const checkCGU = document.getElementById("checkbox1")
const msgSent = document.querySelector(".msg-sent");
const closeMsgSent =document.querySelector('.close-msg-sent')


//3) EXPRESSIONS REGULIERES pour la validation du mail
var reg = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');


//4) Lancer la modale au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

//5) Fermer la modale au click
closeMdl.addEventListener("click",closeModal);
closeMsgSent.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
  // reacffiche a bonne modale quand on reclick sur je m'inscris
  form.style.display = "block";
  msgSent.style.display ="none";
}


//6) fonctions globale pour submit et blur
function validateField(inputElement, nextElementSibling , errorMessage, validationFunction , isFocus) {

  if (validationFunction(inputElement.value)) {
   nextElementSibling.innerHTML = '';
    return true;
  } else {
    nextElementSibling.innerHTML = errorMessage;
    nextElementSibling.className = 'red';
    console.log(inputElement)
    if(isFocus!== true){
      inputElement.focus();
    }
    return false;
  }
}

//7) fonctions de verification des champs (validationFunction)
function validateFirstName() {
  return form.first.value !== '' && form.first.value.length >= 2;
}
function validateLastName() {
  return form.last.value !== '' && form.last.value.length >= 2;
}
function validateEmail() {
  return form.email.value !== '' && reg.test(form.email.value);  
}
function validateBirthdate() {
  return form.birthdate.value !== '' ;
}
function validateQuantity() {
  return form.quantity.value !== '' ;
}
function validateLocation(){
  return form.location.value !== '';
}
function validateCgu(){
  return form.cgu.checked
}

 
//8) BLUR
// verification champs firstname
form.first.addEventListener('blur', function() {
  validateField(form.first,msgFirst,
  'Please provide at least 2 caracters for your firstname!', validateFirstName);
});
// verification champs lastname
form.last.addEventListener('blur', function() {
  validateField(form.last,msgLast, 
  'Please provide at least 2caracters for your lastname!', validateLastName);
});
// verification champs birthdate
form.email.addEventListener('blur', function() {
  validateField(form.email, msgEmail, 
  'Please provide a valid email adress!', validateEmail);
});
// verification champs birthdate
form.birthdate.addEventListener('blur', function() {
  validateField(form.birthdate,msgBirthdate, 
  'Please provide your birthdate!', validateBirthdate);
});
// verification champs quantity
form.quantity.addEventListener('blur', function() {
  validateField(form.quantity,msgQuantity, 
  'Please provide your quantity!', validateQuantity);
});

// verification champs location  : onChange
const boutonsRadio = document.querySelectorAll('input[type="radio"]');
  
// Parcourir tous les boutons radio pour vérifier si l'un d'eux est sélectionné
for (let i = 0; i < boutonsRadio.length; i++) {
  boutonsRadio[i].addEventListener("change", ()=>{
    msgLocation.innerHTML = "";
  })
}

// verification champs cgu
form.cgu.addEventListener('click', function() {
  validateField(form.cgu ,msgCGU, 
  'Please click the CGU!', validateCgu);
});

///////////////////////////////////////////////////

//9) SUBMIT 
form.addEventListener('submit', function(e) {
  e.preventDefault();
 
  // initialise isValid a true pour effectuer une operation logique entre isValid 
  //et validateField : isValid sera true si seulement la function validateField est 
  // egale a true  
  
  let isValid = true;

  // verification champs firstname
  isValid &= validateField(form.first, msgFirst,
  'Please provide your firstname!', validateFirstName);

  // verification champs lastname
  isValid &= validateField(form.last,msgLast,
  'Please provide your lastname!',  validateLastName);

  // verification champs email
  isValid &= validateField(form.email, msgEmail,
  'Please provide a valid email adress!', validateEmail);

  // verification champs birthdate
  isValid &= validateField(form.birthdate,msgBirthdate ,
  'Please provide your birthdate!', validateBirthdate);

  // verification champs quantity
  isValid &= validateField(form.quantity, msgQuantity,
  'Please provide your quantity!', validateQuantity);

  // verification champs location
  isValid &= validateField(form.location, msgLocation,
  'Please provide your location!', validateLocation , true);

  // verifivation champs cgu
  isValid &= validateField(form.cgu, msgCGU,
    'Please check the CGU!', validateCgu);


  // si isValid = true : disparaitre le formulaire et afficher le msg de remerciement
  //  puis  reset les données du formulaire
  if (isValid) {
    form.style.display = 'none';
    msgSent.style.display = 'flex';
    form.reset();
  }
});



