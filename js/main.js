const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const sidebar = document.querySelector('.side-bar');

sidebarToggleBtn.onclick = function () {
  sidebar.classList.toggle('sidebar--mobile-active')
}