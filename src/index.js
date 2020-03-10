import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import store from './redux/store'
import {Provider } from 'react-redux';
import './index.css';
import App from './App';


ReactDOM.render(
    // provider is a component that is parent of everything in tha app
    <Provider store={store}>
        {/*web router component  give all the functionality of routing that this library react router dom provides*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);
