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


//6) Validation du formulaire au submit
function validate(e){
  // empeche le caractere par defaut du formulaire
  e.preventDefault();

  // gestion du l'input prenom
  if(form.first.value == "" ) {
    msgFirst.innerHTML = "Please provide your firstname!" ;
    msgFirst.className ="red";
    form.first.focus() ;
    return false;
  }
  // gestion du l'input prenom qui a moins de 2 caracteres
  else if( form.first.value.length <2){
    msgFirst.innerHTML = "Please provide more caracters!" ;
    msgFirst.className ="red";
    form.first.focus() ;
    return false;
  }
  else{
    msgFirst.innerHTML = "";
  }

  // nom 
  if(form.last.value == "" ) {
    msgLast.innerHTML = "Please provide your lastname!" ;
    form.last.focus() ;
    msgLast.className ="red";
    return false;
  }
  // gestion du l'input nom qui a moins de 2 caracteres
  else if( form.last.value.length <2){
    msgLast.innerHTML = "Please provide more caracters!" ;
    msgLast.className ="red";
    return false;
  }
  else{
    msgLast.innerHTML = "";
  }

  // email
  if(form.email.value == "" ) {
    msgEmail.innerHTML = "Please provide your email!" ;
    form.email.focus() ;
    msgEmail.className ="red";
    return false; 
  }
  // gestion du l'input email qui n'a pas une syntaxe valide
  else if(reg.test(form.email.value) == false){
    msgEmail.innerHTML = "Please provide a valid email adress!" ;
    msgEmail.className ="red";
    return false; 
  }
  else{
    msgEmail.innerHTML = "";
  }

  // birthdate
  if(form.birthdate.value == "" ) {
    msgBirthdate.innerHTML = "Please provide your birthdate!" ;
    form.birthdate.focus() ;
    msgBirthdate.className ="red";
    return false;
  }else{
    msgBirthdate.innerHTML = "";
  }

  // quantity
  if(form.quantity.value == false) {
    msgQuantity.innerHTML = "Please provide your quantity!" ;
    form.quantity.focus() ;
    msgQuantity.className ="red";
    return false;
  }
  else{
    msgQuantity.innerHTML = "";
  }

  // gestion de l'input location
  if(form.location.value == "" ) {
    msgLocation.innerHTML = "Please provide your location!" ;
    msgLocation.className ="red";
    return false;
  }else if(form.location.value == true){
    msgLocation.style.display = "none";
  }

  // envoi de la reponse du formulaire 
  form.style.display = "none";
  msgSent.style.display ="flex";
  
  // Réinitalisation du formualaire
  form.reset();
  return true;
}

//7) soumission du formulaire
form.addEventListener("submit", validate);

///////////////////////////////////////////////////////

//8) Vérification onBLur / onChange
form.first.addEventListener("blur", ()=>{

  
  // gestion du l'input prenom
  if(form.first.value == "" ) {
    msgFirst.innerHTML = "Please provide your firstname!" ;
    msgFirst.className ="red";
    form.first.focus() ;
    return false;
  }
  // gestion du l'input prenom qui a moins de 2 caracteres
  else if( form.first.value.length <2){
    msgFirst.innerHTML = "Please provide more caracters!" ;
    msgFirst.className ="red";
    form.first.focus() ;
    return false;
  }
  else{
    msgFirst.innerHTML = "";
    return true ; 
  }
});

// gestion du l'input nom
form.last.addEventListener("blur", ()=>{

  if(form.last.value == "" ) {
    msgLast.innerHTML = "Please provide your lastname!" ;
    form.last.focus() ;
    msgLast.className ="red";
    return false;
  }
  // gestion du l'input nom qui a moins de 2 caracteres
  else if( form.last.value.length <2){
      msgLast.innerHTML = "Please provide more caracters!" ;
      msgLast.className ="red";
      return false;
  }
  else{
    msgLast.innerHTML = "";
    return true ; 
  }
});

// gestion du l'input email
form.email.addEventListener("blur", ()=>{

  if(form.email.value == "" ) {
    msgEmail.innerHTML = "Please provide your email!" ;
    form.email.focus() ;
    msgEmail.className ="red";
    return false; 
  }
  // gestion du l'input email qui n'a pas une syntaxe valide
  else if(reg.test(form.email.value) == false){
    msgEmail.innerHTML = "Please provide a valid email adress!" ;
    msgEmail.className ="red";
    return false; 
  }
  else{
    msgEmail.innerHTML = "";
    return true ; 
  }
});

// gestion du l'input date de naissance 
form.birthdate.addEventListener("blur", ()=>{

  if(form.birthdate.value == "" ) {
    msgBirthdate.innerHTML = "Please provide your birthdate!" ;
    form.birthdate.focus() ;
    msgBirthdate.className ="red";
    return false;
  }else{
    msgBirthdate.innerHTML = "";
    return true ; 
  }
});

// gestion du l'input quantite
form.quantity.addEventListener("blur", ()=>{

  if(form.quantity.value == false) {
    msgQuantity.innerHTML = "Please provide your quantity!" ;
    form.quantity.focus() ;
    msgQuantity.className ="red";
    return false;
  }
  else{
    msgQuantity.innerHTML = "";
    return true ; 
  }
});

// Gestion du checkbox location 
 const boutonsRadio = document.querySelectorAll('input[type="radio"]');

// Parcourir tous les boutons radio pour vérifier si l'un d'eux est sélectionné
for (let i = 0; i < boutonsRadio.length; i++) {
  boutonsRadio[i].addEventListener("change", ()=>{
    msgLocation.innerHTML = "";
  })
}


// gestion de la checkbox des cgu
form.cgu.addEventListener("click", ()=>{
  if(form.cgu.checked == false ) {
    msgCGU.innerHTML = "Please check the CGU !" ;
    form.cgu.focus() ;
    msgCGU.className ="red";
    return false;
  }else{
    msgCGU.innerHTML = "";
    return true ; 
  }
});



