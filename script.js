function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    console.log('Toggle menu clicked'); // Додайте це
    navMenu.classList.toggle('active');
    console.log('Menu active:', navMenu.classList.contains('active')); // Додайте це
}
