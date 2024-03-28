document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code can go here. For example:
    alert("Welcome to Axdox! Explore our innovative AI solutions.");
});
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');

    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});
