const password = document.querySelector(".passW");
const register = document.querySelector(".regis");
const closeBtn = document.querySelector(".close");
const login = document.querySelector(".login-back");
const containerOne = document.querySelector(".container1");
const containerTwo = document.querySelector(".container2");
const containerThree = document.querySelector(".container3");
// Reset your password
password.addEventListener("click", function (e){
    e.preventDefault();
    containerOne.style.display = "none";
    containerThree.style.display = "flex";
})
// close Reset page
closeBtn.addEventListener("click", function(e){
    e.preventDefault();
    containerOne.style.display = "flex";
    containerThree.style.display = "none";
})
//Registeration link 
register.addEventListener("click", function(e){
    e.preventDefault();
    containerTwo.style.display = "flex";
    containerOne.style.display = "none";
})
// Go back to login page
login.addEventListener("click", function (e){
    e.preventDefault();
    containerOne.style.display = "flex";
    containerTwo.style.display = "none";
})