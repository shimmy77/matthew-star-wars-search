import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import App from './App/App';

library.add(faJediOrder);

ReactDOM.render(<App />, document.getElementById('root'));
