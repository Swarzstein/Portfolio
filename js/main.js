function displayMenu() {
  document.querySelector('#menu-button').classList.toggle('hidden');
  document.querySelector('#wide-menu').classList.toggle('hidden');
}
document.querySelector('#menu-button').addEventListener('click', displayMenu);
document.querySelector('#wide-menu > div > button').addEventListener('click', displayMenu);