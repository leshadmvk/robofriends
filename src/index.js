import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots'

ReactDOM.render(
	<App robots={robots}/>, 
	document.getElementById('root'));

serviceWorker.unregister();
