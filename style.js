var toggleClose = function() {
    const hamburgerToggle = document.getElementById('hamburger');
    const sidebarToggle = document.getElementById('sidebar');

    hamburgerToggle.classList.toggle('close');
    sidebarToggle.classList.toggle('close');
}