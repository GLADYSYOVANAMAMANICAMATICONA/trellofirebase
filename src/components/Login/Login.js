import React, { Component } from 'react';
import {NavLink,  Redirect } from 'react-router-dom';

import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from '../../actions/actionsLogin';

export const Login  = ({successLogin}) => {
    return (
        <div>
      <div className="App">
         {
            successLogin  && <Redirect to = "/home" />
         }
         <form onSubmit = {
            e => {
               e.preventDefault();
               signIn ( this.emailInputRef.value,  this.passwordInputRef.value)
            }
         }>
            <input  placeholder="email"  ref = { e => this.emailInputRef = e}/>
            <input   type="password" placeholder="password"  ref = { e => this.passwordInputRef = e}/>
            {/* <NavLink className="cont-icon " to="/TrelloApp"> */}
            <button type = "submit" > 
               Login 
            </button>

     {/* </NavLink> */}

         </form>
      </div>
      <NavLink className="cont-icon " to="/Register">
      <p className="red">Register</p>

     </NavLink>
      </div>
    );
} 