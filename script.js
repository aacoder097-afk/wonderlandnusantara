const toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

toggle.addEventListener('click', () => {
  sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
});