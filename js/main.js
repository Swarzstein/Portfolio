const projects = {
  card0: {
    id: 0,
    title: 'Multi-Post Stories',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: true,
  },
  card1: {
    id: 1,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
  card2: {
    id: 2,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
  card3: {
    id: 3,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
  card4: {
    id: 4,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
  card5: {
    id: 5,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
  card6: {
    id: 6,
    title: 'Profesional Art Printing Data',
    imgs: '../img/card-img-1.png',
    imgb: '../img/Img-Placeholder.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkLive: 'https://swarzstein.github.io/Portfolio/',
    linkSource: 'https://github.com/Swarzstein/Portfolio',
    mProject: false,
  },
};

function loadWorks() {
  let topCard = '';
  let cardGroup = '';
  //  eslint-disable-next-line
  for(const project in projects) {
    const proj = projects[project];
    let technologies = '';
    const projTech = proj.technologies;
    if (!proj.mProject) {
      for (let i = 0; i < projTech.length; i += 1) {
        technologies += `\t\t\t\t\t\t<button class="p-lang-2">${projTech[i]}</button>\n`;
      }
      cardGroup += `
      <div id="${project}" class="card column wht bg-img-1" onmouseover="mauseOn('${project}')" onmouseout="mauseOff('${project}')">\n
      <div class="card-content">\n
        <h2 class="title-post-2">${proj.title}</h2>\n
        <p class="tema-2">${proj.description}</p>\n
        <ul class="btn-group">\n
        ${technologies}
        </ul>\n
      </div>\n
      <button class="link-btn-2 fill-h" onclick="seeProject('${project}')">See Project</button>\n
    </div>\n`;
    } else {
      for (let i = 0; i < projTech.length; i += 1) {
        technologies += `\t\t\t\t\t\t<button class="p-lang">${projTech[i]}</button>\n`;
      }
      topCard += `
      \t\t\t\t<div class="fit-container g-1">\n
      \t\t\t\t\t<img class="fit-container" src="${proj.imgb}" alt="picture">\n
      \t\t\t\t</div>\n
      \t\t\t\t<div class="fit-container g-1">\n
      \t\t\t\t\t<h2 class="title-post">${proj.title}</h2>\n
      \t\t\t\t\t<p class="tema-2">${proj.description}</p>\n
      \t\t\t\t\t<div class="btn-group g-1 spaced">\n
      ${technologies}
      \t\t\t\t\t</div>\n
      \t\t\t\t\t<button class="link-btn fit" onclick="seeProject('${project}')">See Project</button>\n
      \t\t\t\t</div>\n\n`;
    }
  }
  document.getElementById('top-card').innerHTML = topCard;
  document.getElementById('card-group').innerHTML = cardGroup;
}

function displayMenu() {
  document.querySelector('#menu-button').classList.toggle('hidden');
  document.querySelector('#wide-menu').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('noscroll');
}

// eslint-disable-next-line
function seeProject(id) {
  const project = projects[id];
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    technologies += `\t\t\t\t\t\t<button class="p-lang g-1">${project.technologies[i]}</button>`;
  }
  document.querySelector('#card-modal').classList.toggle('hidden');
  document.querySelector('#modal-title').textContent = project.title;
  document.getElementById('modal-tecs').innerHTML = technologies;
  document.querySelector('#modal-img').textContent = project.imgb;
  document.querySelector('#modal-desc').textContent = project.description;
  document.getElementById('open-links').innerHTML = `\t\t\t\t\t\t\t<button class="link-btn flex" onclick="openURL('${project.linkLive}')">See Live <img src="./icons/Icon-Export.png" alt="Live"></button>\n
  \t\t\t\t\t\t\t<button class="link-btn flex" onclick="openURL('${project.linkSource}')">See Source <img src="./icons/Icon-GitHub3.png" alt="GitHub"></button>\n`;
}

// eslint-disable-next-line
function openURL(url) {
  window.open(url, '_blank').focus();
}

function closeModal() {
  document.querySelector('#card-modal').classList.toggle('hidden');
}

const email = document.getElementById('email');

document.querySelector('#email').addEventListener('keyup', (e) => {
  const regx = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (email.value.match(regx)) {
    e.preventDefault();
    window.alert(`${email.value} es texto inválido`); // eslint-disable-line
    document.querySelector('#email').style.border = '1px solid rgb(204, 11, 11)';

    document.querySelector('#email').classList.add('invalid');
  } else {
    document.querySelector('#email').classList.remove('invalid');
  }
});

document.querySelector('body').addEventListener('load', loadWorks);
document.querySelector('#menu-button').addEventListener('click', displayMenu);
document.querySelector('#wide-menu > div > button').addEventListener('click', displayMenu);
document.querySelector('#close-modal').addEventListener('click', closeModal);