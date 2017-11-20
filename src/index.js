import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'redux-zero/react'
import registerServiceWorker from './registerServiceWorker'
// import Board from './components/Board/Board';
import {Login} from './components/Login/Login'
import {Register} from './components/Register/Register'
import TrelloApp from './TrelloApp'
import {Home} from './Home'
import store from './store/store'
import App from './App';
import {readBoard} from './actions/actions'
// import readBoard from './actions/actionsLogin';

const Index = () =>  (
   <Provider store={store}>
         <App />
   </Provider>
)
readBoard();

ReactDOM.render(
   <Index />,
    document.getElementById('root'));
registerServiceWorker();
