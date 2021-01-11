import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';

import Main from './Main/Main.jsx';

import { store, history } from './store.js';
import { ConnectedRouter } from 'react-router-redux';



ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
