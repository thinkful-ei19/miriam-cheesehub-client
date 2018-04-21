import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import CheeseList from './components/cheese-list.js'

// const cheeses = [
//     "Bath Blue",
//     "Barkham Blue",
//     "Buxton Blue",
//     "Stilton Blue"
// ]

ReactDOM.render(
    <Provider store={ store }>
    <CheeseList />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
