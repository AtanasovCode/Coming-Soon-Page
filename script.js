document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("form").onsubmit = (e) => {
       e.preventDefault();
       const mail = document.getElementById("mail").value;

       const textEmpty = "Whoops! It looks like you forgot to add your email";
       const textFalse = "Please provide a valid email address";

       if(mail==='' || mail.trim() === '') {
           document.getElementById("mail").className="error";
           document.getElementById("error-text").innerHTML=textEmpty;
       } else if(!validateEmail(mail)) {
           document.getElementById("mail").className="error";
           document.getElementById("error-text").innerHTML=textFalse;
       } else {
           document.getElementById("mail").className="mail";
           document.getElementById("error-text").innerHTML='';
       }
   };
});



function validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}