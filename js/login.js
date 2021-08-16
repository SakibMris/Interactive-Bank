document.getElementById('submit-button').addEventListener('click', function () {
    //get user email
    const inputBox = document.getElementById('input-email');
    const userEmail = inputBox.value;
    // get user password 
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value;

    if (userEmail == 'boss@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

});