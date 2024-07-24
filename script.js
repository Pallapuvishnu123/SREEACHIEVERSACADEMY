document.addEventListener("DOMContentLoaded", function() {
    const announcements = document.querySelectorAll("#announcement-list li");
    let currentIndex = 0;

    function displayNextAnnouncement() {
        if (currentIndex < announcements.length) {
            announcements[currentIndex].style.display = "block";
            currentIndex++;
        }
    }

    window.addEventListener("scroll", function() {
        const triggerPoint = window.innerHeight * 0.75; // Adjust the percentage as needed
        if (window.scrollY > triggerPoint) {
            displayNextAnnouncement();
        }
    });
});
