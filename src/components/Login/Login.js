import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { connect } from 'redux-zero/react'
import { signIn, signOut, signUp } from '../../actions/actionsLogin';

export const Login = ({ successLogin }) => {
    return (
        <div>
            <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
            <div className="App">
                {
                    successLogin && <Redirect to="/home" />
                }
                <form onSubmit={
                    e => {
                        e.preventDefault();
                        signIn(this.emailInputRef.value, this.passwordInputRef.value)
                    }
                }>
                    <div class="input-group">
                        <input className="form-control" placeholder="email" ref={e => this.emailInputRef = e} />
                        <input className="form-control" type="password" placeholder="password" ref={e => this.passwordInputRef = e} />
                        <button className="btn btn-primary btn-block" type="submit" >
                            Login
            </button>
                    </div>
                </form>
            </div>
            <NavLink className="cont-icon " to="/Register">
                <p className="red">Register</p>
            </NavLink>
            </div>
        </div>
    );
} 