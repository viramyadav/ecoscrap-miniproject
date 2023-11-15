const bookSchedule = document.getElementById("book");
const close = document.getElementById("close");
const overlay = document.getElementsByClassName("overlay")[0];

const appointment = document.getElementById("appndetails");

bookSchedule.addEventListener("click", () => {
    overlay.style.display = "block";
    const value1 = localStorage.getItem('Date');
    const value2 = JSON.parse(localStorage.getItem('Address'));
    const value3 = localStorage.getItem('Payment');
    const details1 = `Date: ${value1}`;
    const details2 = `Address: ${value2.join(', ')}`;
    const details3 = `Payment: ${value3}`;
    const details = details1 + '\n' + details2 + '\n' + details3;
    appointment.textContent = details;
});

close.addEventListener("click",()=>{
    overlay.style.display="none";
});

// to save date from div 1 to the local storage
const enteredPickUpDate = document.getElementById("pickup");
const submitenteredPickUpDate = document.getElementById("submitDate");

submitenteredPickUpDate.addEventListener("click",(event)=>{
    event.preventDefault();
    const savedDate = enteredPickUpDate.value;
    // Saving in local storage
    localStorage.setItem('Date',savedDate);
});

// to save date from div 2 to the local storage
const enteredai1 = document.getElementById("ai1");
const enteredai2 = document.getElementById("ai2");
const enteredai3 = document.getElementById("ai3");
const submitenteredAdd = document.getElementById("submitAdd");

submitenteredAdd.addEventListener("click",(event)=>{
    event.preventDefault();
    const savedai1 = enteredai1.value;
    const savedai2 = enteredai2.value;
    const savedai3 = enteredai3.value;

    const Add = [];
    Add.push(savedai1,savedai2,savedai3);
    // Saving in local storage
    localStorage.setItem('Address',JSON.stringify(Add));
});

// to save date from div 3 to the local storage
const enteredpay = document.getElementById("payment");
const submitenteredPayment = document.getElementById("submitPay");

submitenteredPayment.addEventListener("click",(event)=>{
    event.preventDefault();
    const savedpay = enteredpay.value;
    
    // Saving in local storage
    localStorage.setItem('Payment',savedpay);
});