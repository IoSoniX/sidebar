const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function() {
    sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});