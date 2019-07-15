import renderPage from './components/pageView/renderPage';
import onSignIn from './components/loading/oAuth/googleAuth';

import './source/style/index.css';

renderPage();

window.onSignIn = onSignIn;
