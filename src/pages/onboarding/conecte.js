import {
  navigation
} from '../../router.js';

export const Conecte = () => {
  const template = `
    <figure class="onboard-header">
      <img src="../../img/onboard2.png" class="onboard-img" alt="Imagem de um veleiro">
      <div class="horizontal-svg">
        <svg viewBox="0 0 1825 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 200 C 181 200 181 74 362 74 L 362 74 L 362 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 361 74 C 583.5 74 583.5 159 806 159 L 806 159 L 806 0 L 361 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 805 159 C 1031.5 159 1031.5 51 1258 51 L 1258 51 L 1258 0 L 805 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 1257 51 C 1549 51 1549 200 1841 200 L 1841 200 L 1841 0 L 1257 0 Z" stroke-width="0"></path></svg>
      </div>
      <div class="vertical-svg">
        <svg viewBox="0 0 1825 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 200 C 181 200 181 74 362 74 L 362 74 L 362 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 361 74 C 583.5 74 583.5 159 806 159 L 806 159 L 806 0 L 361 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 805 159 C 1031.5 159 1031.5 51 1258 51 L 1258 51 L 1258 0 L 805 0 Z" stroke-width="0"></path><path fill="rgba(255, 255, 255, 1)" d="M 1257 51 C 1549 51 1549 200 1841 200 L 1841 200 L 1841 0 L 1257 0 Z" stroke-width="0"></path></svg>
      </div>
    </figure>

    <section class="content">
      <header class="content-title">
      Compartilhe<br>
      suas experiências...
      </header>

      <main class="content-paragraph">
        <p>Pra quem já conhece e pra quem quer conhecer... </p> 
      </main>

      <section class="section-continue-button">
        <button data-continue id="btn-continue" class="btn-continue">Continuar</button>
      </section>

      <section class="section-skip-button">
        <button class="btn-skip">Pular</button>
      </section>
    </section>
  `;

  const rootElement = document.createElement('div')
  rootElement.setAttribute('class', 'conecte-container')
  rootElement.innerHTML = template;

  const continueBtn = rootElement.querySelector('#btn-continue')
  continueBtn.addEventListener('click', (event) => {
    event.preventDefault()
    navigation('/comunique')
  });

  // const skipBtn = rootElement.querySelector('.btn-skip')
  // skipBtn.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   navigation('/login')
  // });

  return rootElement;

} 
