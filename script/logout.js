document.getElementById('log-out').addEventListener('click', function(event) {
    event.preventDefault();

    const confirmLogout = confirm('Do you want to log out your account?');

    if (confirmLogout) {
        window.location.href = '../index.html';
    } else {
        alert('Logout cancelled.');
    }
});
