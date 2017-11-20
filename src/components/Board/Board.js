import React from 'react'
import {addStage} from '../../actions/actions'

import {connect} from 'redux-zero/react';
import Stage from '../Stage/Stage';
// import '../../css/main.css'

export const Board = ({stages, tasks}) => {
  console.log('stages', stages)
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
      <div className = "Board-container">
        
          <div className = "Board-column">
             {list}
          </div>
          <div className = "Board-column">
            <form onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input type="text" ref = {e => this.stageInputRef = e}/>
               <button type="submit">
                  save list
               </button>
               </form>
            </div>
      </div>
   ); 
}


