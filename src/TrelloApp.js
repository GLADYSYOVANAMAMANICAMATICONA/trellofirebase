import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import ReactDOM from 'react-dom';

// import React from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions/actionsLogin';
import {Board} from './components/Board/Board';

const Login  = ({successLogin, user}) => {
    return (
      <div className="App">
         {
            !successLogin  && <Redirect to = "/login" />
         }
         <h1> Kahoot Survey Admin </h1>
         <button onClick = {signOut}>
            SignOut
         </button> 
         {/* <Redirect to = "/login" /> */}
      </div>
    );
} 

// const Trello = ({stages, tasks}) => {
//     console.log (stages);
//     console.log (tasks);
    
//     return <div className="App">
//     </div>
//  };

export const TrelloApp = ({successLogin, stages, tasks}) => {
   
   return <div className="App">
       <Login successLogin={successLogin}/>
       {/* <Trello/> */}
        <Board stages={stages}  tasks = {tasks}/>

   </div>
};

// const mapToProps = ({successLogin, stages, tasks})  => ({successLogin, stages, tasks}) 

// export default connect(mapToProps)(TrelloApp);
