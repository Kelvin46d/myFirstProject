function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("d-none"));
    document.getElementById(sectionId).classList.remove("d-none");

    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
}

// Example dynamic stats update
document.getElementById("total-orders").innerText = "129";
document.getElementById("total-revenue").innerText = "$2,680";
document.getElementById("active-users").innerText = "63";
document.getElementById("nav-dashboard").addEventListener("click", () => showSection("dashboard-section"));
document.getElementById("nav-menu").addEventListener("click", () => showSection("menu-management-section"));
document.getElementById("nav-orders").addEventListener("click", () => showSection("order-management-section"));
document.getElementById("nav-users").addEventListener("click", () => showSection("user-management-section"));