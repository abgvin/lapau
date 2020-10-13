import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
 
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
});