const moonIcon = document.getElementById('moonIcon');
const logo = document.getElementById('logo');
const logo_menu = document.getElementById('logo_menu');


moonIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        logo.src = 'img/logo-white.png';

        logo_menu.src = 'img/logo-white.png';

        
        localStorage.setItem('darkMode', 'enabled');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
        logo.src = 'img/logo-black.png';

        logo_menu.src = 'img/logo-black.png';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// founction to save the mide user choose

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
        logo.src = 'img/logo-white.png';
    } else {
        document.body.classList.remove('dark-mode');
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
        logo.src = 'img/logo-black.png';
    }
});