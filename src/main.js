var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/semantic-ui/dist/semantic.min.css';
import '../node_modules/semantic-ui/dist/semantic.min.js';
import '../styles/styles.css';
import '../styles/arduinolight.css'
// import '../node_modules/material-design-lite/dist/material.brown-deep_orange.min.css';
// import '../node_modules/material-design-lite/dist/material.min.js';


bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
