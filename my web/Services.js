document.addEventListener("DOMContentLoaded", function() {
    // Example JavaScript: Highlight a service on hover
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.backgroundColor = '#f0f0f0';
        });

        service.addEventListener('mouseout', () => {
            service.style.backgroundColor = 'white';
        });
    });
});
