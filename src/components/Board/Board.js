import React from 'react'
import {addStage} from '../../actions/actions'

import {connect} from 'redux-zero/react';
import Stage from '../Stage/Stage';
import '../../css/main.css';

import logo from '../../img/logo.png';

export const Board = ({stages, tasks}) => {
  console.log('stages', stages)
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
      <div className = "Board-container">
                    <div className="row">
                <div className="col-sm-12">
                <div className = "Board-column">
            <form className="saveList" onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input className="form-control" type="text" ref = {e => this.stageInputRef = e}/>
               <button className="btn btn-primary btn-block" type="submit">
                  save list
               </button>
               </form>
            </div>
            <div className = "Board-column-m">
              <br/>
             {list}
          </div>
                </div>

            </div>
         
      </div>
   ); 
}


