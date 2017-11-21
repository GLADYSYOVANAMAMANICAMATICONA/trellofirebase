import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import ReactDOM from 'react-dom';

import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions/actionsLogin';
import {Board} from './components/Board/Board';
// import logo from './img/logo.png';

import './css/main.css';

const Login  = ({successLogin}) => {
    return (
      <div className="App">
         {
            !successLogin  && <Redirect to = "/login" />
         }
         <button className="btn-primary" onClick = {signOut}>
            SignOut
         </button> 
      </div>
    );
} 

export const TrelloApp = ({successLogin, stages, tasks}) => {
   
   return <div className="App">
       <Login successLogin={successLogin}/>
        <Board stages={stages}  tasks = {tasks}/>
   </div>
};


