import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import './_base.scss'
import store from './redux/store';


import { BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);