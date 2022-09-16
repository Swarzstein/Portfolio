function displayMenu() {
  document.querySelector('#menu-button').classList.toggle('hidden');
  document.querySelector('#wide-menu').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('noscroll');
}
document.querySelector('#menu-button').addEventListener('click', displayMenu);
document.querySelector('#wide-menu > div > button').addEventListener('click', displayMenu);

const projects = {
  card1: {
    id:1,
    title: "Profesional Art Printing Data",
    imgs: "../img/card-img-1.png",
    imgb: "../img/Img-Placeholder.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["HTML","Bootstrap","Ruby"],
    mProject: true,
  }
}

