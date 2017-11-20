import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    NavLink,
    Route,
    Redirect,
    Switch} from 'react-router-dom';
import {Login} from './components/Login/Login'
import {Register} from './components/Register/Register'
import {TrelloApp} from './TrelloApp'
import {Home} from './Home'
import store from './store/store'

const App = ({successLogin, user, stages, tasks}) => {
return (
    <div className="container">
        <HashRouter>
            <Switch>
                
            <Route exact path='/Login' render={() => <Login successLogin={successLogin} />} />
            <Route path='/Register' render={() => <Register successLogin={successLogin} />} />
            <Route path='/home' render={() => <Home successLogin={successLogin} user={user}  />} />
            <Route path='/TrelloApp' render={() => <TrelloApp successLogin={successLogin} stages={stages} tasks={tasks} />} />
            <Route exact path='/' render={() => <Login successLogin={successLogin} />} />

		{/* <Route component={Login} /> */}
            </Switch>
        </HashRouter>
    </div>
)
}

const mapToProps = ({successLogin, user, stages, tasks})  => ({successLogin, user, stages, tasks}) 

export default connect(mapToProps)(App);