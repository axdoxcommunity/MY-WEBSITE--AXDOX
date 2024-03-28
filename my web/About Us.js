document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.transform = 'scale(1.1)';
            member.style.transition = 'transform 0.5s';
        });

        member.addEventListener('mouseout', () => {
            member.style.transform = 'scale(1)';
        });
    });
});
