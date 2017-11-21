import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { connect } from 'redux-zero/react'
import { signIn, signOut, signUp } from '../../actions/actionsLogin';

export const Register = ({ successLogin }) => {
  return (
    <div>
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
        {
          successLogin && <Redirect to="/home" />
        }
        <form onSubmit={
          e => {
            e.preventDefault();
            signUp(this.fullNameRef.value, this.emailRef.value, this.passwordRef.value)
          }
        }>
          <div class="input-group">

            <input className="form-control" placeholder="FullName" ref={e => this.fullNameRef = e} />
            <input className="form-control" placeholder="Email" ref={e => this.emailRef = e} />
            <input className="form-control" type="password" placeholder="Password" ref={e => this.passwordRef = e} />

            <button className="btn btn-primary btn-block" type="submit">
              Sign Up!
              </button>
          </div>

        </form>
        <NavLink className="cont-icon " to="/Login">
                <p className="red">Login</p>
            </NavLink>
      </div>
    </div>
  );
}
