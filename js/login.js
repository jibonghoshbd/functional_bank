document.getElementById('login-button').addEventListener('click', function () {
    //    get usser user name 

    const usserFild = document.getElementById('usser-email');
    const usserEmail = usserFild.value;


    // get usser passwored 
    const passwordFild = document.getElementById('usser-password');
    const usserPassword = passwordFild.value;

    if (usserEmail == 'sontan@bap.com' && usserPassword == 'secrit') {
        window.location.href = 'banking.html';
    } else {
        console.log('invalid')
    }

})