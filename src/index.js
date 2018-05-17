import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store'
import Auth from './components/Auth'


import {Provider} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App/>
            </Auth>
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));

