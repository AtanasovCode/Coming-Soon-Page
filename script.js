document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("form").onsubmit = (e) => {
       e.preventDefault();
       const mail = document.getElementById("mail").value;

       const textEmpty = "Cannot be empty";
       const textFalse = "Please enter a valid email";

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