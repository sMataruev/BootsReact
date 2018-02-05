import {render} from 'react-dom';
import React from "react";
import {Provider} from 'react-redux';


import App from './reactComponents/App';


const root = document.getElementById('root');
render(
        <App/>,
    root
);