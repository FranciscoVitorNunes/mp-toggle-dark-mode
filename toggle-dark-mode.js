const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-black');
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('text-white');
});
