$(document).ready(function () {


        $('form').submit(function (event) {
            event.preventDefault();
            let username = $('#username').val();
            let email = $('#email').val();
            let password = $('#password').val();
            let confirmPassword = $('#confirm-password').val();

            // validation
            if (username.length < 4) {
                alert('Username must be at least 4 characters long.');
                return;
            }
            
            if (gender < 1) {
                alert('Select your gender');
                return;
            }
            

           // if (!isValidEmail(email)) {
            //    alert('Invalid email address.');
           //     return;
           // }
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            else {
                localStorage.setItem('username', $('#username').val());
                localStorage.setItem('gender', $('#gender').val());
                localStorage.setItem('email', $('#email').val());
                localStorage.setItem('password', $('#password').val());
                localStorage.setItem('confirmPassword', $('#confirm-password').val());
               // alert('Your account has been created');


            }

            // success
            alert('Sign up successful!');
            $('form')[0].reset();
            window.location = "index.html";
            alert('Please sign in with your credentials!');
        });
     //.............................................................
});
//............................................

//function isValidEmail(email) {
 //   let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // let emailRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
    //let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return emailRegex.test(email);
//}
