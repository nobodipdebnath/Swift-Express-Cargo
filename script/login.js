document.getElementById('login').addEventListener('click', function(event){
    event.preventDefault();
    const userEmail = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if(userEmail === 'nobodipdebnath45@gmail.com' && password ==='nobodip667733'){
        alert('You are log in')
        window.location.href = '../page/dashboard.html'
    }
    else{
        alert('Email or password invalid please try again')
    }
});



