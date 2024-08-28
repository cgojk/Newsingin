'use strict'

const email = document.querySelector('input[name=email]');
const button = document.querySelector('.btn');
const error = document.querySelector('.error');
const overlay = document.querySelector('.overlay');
const text =  document.querySelector('#message');
const btnClosemModal= document.querySelector('.close-modal')
const btnCloseModal= document.querySelector('.btn__subscription');
const modalOpen= document.querySelector('.modal__receive_mail');

const emailInput = document.querySelector(".email-received");


const openModal = function () {
    modalOpen.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  
  const closeModal = function () {
    modalOpen.classList.add('hidden');
    overlay.classList.add('hidden');
  };

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}


console.log(emailInput);

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      
      emailInput.innerHTML=email.value;
      console.log(emailInput);
        openModal();

        btnCloseModal.addEventListener('click', closeModal);
        btnClosemModal.addEventListener('click',closeModal);
         
         email.value= ' ';

         error.classList.add('hidden');
    }
    else{
   
        text.innerText=" Please provide a valid email";
        document.querySelector('input').style.borderColor='red';
        document.querySelector('input').style.backgroundColor='#f3cbc9';
       
         error.classList.remove('hidden');
        
      }

    })