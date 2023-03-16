$(document).ready(function () {


    $('form').submit(function (event) {
        event.preventDefault();

       

        let userName = document.querySelector('#usernamein');
        let userPw = document.querySelector('#passwordin');

        let storedName = localStorage.getItem('username');
        let storedPw = localStorage.getItem('password');



        if (userName.value == storedName && userPw.value == storedPw) {
            alert('You are logged in.');
            window.location = "bookticket.html";
        } else {
            alert('Error on login');
        }



    });


});
//........................................


//.........................................

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
