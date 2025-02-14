function orderFood() {
    alert("Redirecting to food delivery service...");
    window.location.href = "https://www.fooddelivery.com"; 
}

function bookAppointment() {
    alert("Redirecting to online doctor consultation...");
    window.location.href = "https://www.medicalservice.com"; 
}

// Smooth Scrolling for Navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});