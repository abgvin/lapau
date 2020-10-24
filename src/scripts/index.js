import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/loading.css';
import App from './views/app';
import swRegsiter from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#sidebar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegsiter();
});
