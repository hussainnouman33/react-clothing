import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
    // web router component  give all the functionality of routing that this library react router dom provides
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);
