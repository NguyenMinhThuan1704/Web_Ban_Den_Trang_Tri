document.addEventListener('DOMContentLoaded', function() {
    var toggleIcons = document.querySelectorAll('.icon_eye');

    toggleIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            var passwordInput = icon.parentElement.querySelector('.matkhau_pass');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    });
});