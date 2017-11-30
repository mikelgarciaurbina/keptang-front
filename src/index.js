import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Template } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Template />, document.getElementById('root')); // eslint-disable-line no-undef
registerServiceWorker();
