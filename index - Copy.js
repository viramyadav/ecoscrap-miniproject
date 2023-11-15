// Targetting the div containers
const signupform = document.getElementsByClassName("Form")[0];
const loginform = document.getElementsByClassName("Form")[1];

// Targetting the forms
const registerform = document.getElementsByTagName("form")[0];
const login1form = document.getElementsByTagName("form")[1];

const toggle = document.getElementById("mls");

// Toggle Form Event Handling

function toggleForms() {
    if (toggle.checked) {
        signupform.style.zIndex = "0";
        loginform.style.zIndex = "1";
    }
    else {
        signupform.style.zIndex = "1";
        loginform.style.zIndex = "0";
    }
}

toggleForms();

toggle.addEventListener("change", toggleForms);

// Card name changer

const frontimg = document.getElementById("front");
const backimg = document.getElementById("back");

const outname =document.getElementById("outname");
const outno =document.getElementById("outno");
const outemail =document.getElementById("outemail");

const username = document.getElementById("name");
const userno = document.getElementById("no");
const useremail = document.getElementsByClassName("email")[0];
const userpass = document.getElementsByClassName("pass")[0];

function backimgfunc(){
    frontimg.style.display = "none";
    outname.style.zIndex = "-1";
    backimg.style.display = "block";
    outno.style.zIndex = "6";
    outemail.style.zIndex = "6";
}

function frontimgfunc(){
    frontimg.style.display = "block";
    outname.style.zIndex = "6";
    backimg.style.display = "none";
    outno.style.zIndex = "-1";
    outemail.style.zIndex = "-1";
}

username.addEventListener("click",frontimgfunc);
username.addEventListener("input", function(){
    const inputValue = username.value;
    outname.innerHTML = inputValue;
        registerform.style.borderTop = "10px solid #00FF00";
})

userno.addEventListener("click", backimgfunc);
userno.addEventListener("input", function(){
    const inputValue = userno.value;
    outno.innerHTML = inputValue;
        registerform.style.borderLeft = "10px solid #00FF00";
})

useremail.addEventListener("click",backimgfunc);
useremail.addEventListener("input", function(){
    const inputValue = useremail.value;
    outemail.innerHTML = inputValue;
        registerform.style.borderRight = "10px solid #00FF00";
})

userpass.addEventListener("click", frontimgfunc);
userpass.addEventListener("input",function(){
        registerform.style.borderBottom = "10px solid #00FF00";
})

const successalert = document.getElementsByTagName("button")[0];
successalert.addEventListener("click",function(){
    if(username.value==1 && useremail.value==1 && userno.value==1 && userpass.value==1){
        alert("Registered Successfully");
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = '/home.html';
    });
});

document.addEventListener('DOMContentLoaded',frontimgfunc);

// Function to handle class manipulation based on window width
function handleClassOnWidthChange() {
    const greencard = document.querySelector(".card");
    
    if (window.innerWidth < 1200) {
      greencard.classList.remove("card");
      greencard.classList.add("hide");
    }
    else {
      greencard.classList.remove("hide");
      greencard.classList.add("card");
    }
  }
  // Call the function initially and attach it to a resize event to handle changes
  handleClassOnWidthChange();
  window.addEventListener("resize", handleClassOnWidthChange);
  