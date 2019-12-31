// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/aurora.css';

// Import Eclipse 
import Eclipse from './eclipse/eclipse.ts';
import cores from './cores/index.ts';

window.appVersion = '3.0.0';

window.eclipse = new Eclipse({
	version: appVersion,
	systems: cores,
});

// Import App Component
import App from '../components/app.jsx';

// Init F7 Vue Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
	React.createElement(App),
	document.getElementById('app'),
);