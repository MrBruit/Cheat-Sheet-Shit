import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Gère la redirection depuis 404.html
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect.replace(location.origin, ''));
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/Cheat-Sheet-Shit">
    <App />
  </BrowserRouter>,
)