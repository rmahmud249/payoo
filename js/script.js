const validPhone=1731732650;
const validPin=1234;
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mobileNumber=document.getElementById('mobile-number');
    const pinNumber=document.getElementById('pin-number');
    const mobileInt=parseInt(mobileNumber.value);
    const pinInt=parseInt(pinNumber.value);
    if(mobileInt === validPhone && pinInt===validPin){
        window.location.href='./home.html';
    }
    else{
        alert('Invalid Mobaile & PIN');
    }
    mobileNumber.value='';
    pinNumber.value='';
})