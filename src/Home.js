import React, { Component } from 'react';
import {connect} from 'redux-zero/react'

import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions/actionsLogin'
// import './Home.css';


export const Home  = ({successLogin, user}) => {
    return (
      <div className="Home">
         {
            !successLogin  && <Redirect to = "/home" />
         }
         <h1> Kahoot Survey Admin </h1>
         <button onClick = {signOut}>
            SignOut
         </button> 
         <Redirect to = "/TrelloApp" />
      </div>
    );
} 
// const mapToProps = ({successLogin,user})  => ({successLogin, user}) 
// export default connect(mapToProps)(Home) 
