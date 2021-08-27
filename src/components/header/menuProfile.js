import {
  signOut, currentUser, infoBoat,
} from '../../services/index.js';

export function headerMenuProfile() {
  const rootMain = document.querySelector('.root');
  rootMain.innerHTML = '';
  const header = document.createElement('header');
  header.classList.add('menu-header');
  header.innerHTML = `
          <div class='menu'>
          <img src="./img/logo_menu.png" alt='BomBordo' class='logo-header' id='feed'/>
          <button class="toHome" id="feed"> HOME </button>
          <button class="btnLogout" id="logout"> SAIR </button>
          `;

  rootMain.prepend(header);

  const nav = document.querySelector('.menu-nav');

  header.addEventListener('click', (event) => {
    const optionMenu = event.target.id;
    switch (optionMenu) {
      case 'logout':
        signOut();
        break;

      case 'feed':
        window.history.pushState('nulo', 'nulo', '/feed');
        const popSStateEvent = new PopStateEvent('popstate', {});
        dispatchEvent(popSStateEvent);
        break;
      default:
        return; // ele precisa retornar algo que mantenha o usuário na tela atual
    }
    nav.classList.remove('active');
  });
}
