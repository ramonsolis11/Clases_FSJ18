import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-j8kjp2hyhwyxb1fb.us.auth0.com'
    clientId='w3hXarhsNtV9tCz7WmkRjWmI7XSaCdTV'
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);



