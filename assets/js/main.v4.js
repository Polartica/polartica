document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('show'));
});