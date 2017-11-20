import store from '../store/store'
import {auth, database} from './firebase';

export function readBoard () {
   database.ref('stages').on ('value', res => { 
     //escritura....Para ejecutar operaciones de escritura básicas........
    //  Si deseas leer datos de una ruta y escuchar para detectar cambios
    //  value	Lee y detecta cambios en todo el contenido de una ruta.
      let stages = []
      res.forEach ( snap  => {
        // forEach...La instrucción foreach repite un grupo de instrucciones 
        // insertadas por cada elemento de una matriz o una colección de objetos
         const stage = snap.val();
        //  Si se llama a val() / getValue() en una instantánea, se obtendrá 
        // la representación de los datos como objeto específico de idioma.
         stages.push (stage);
      })
      store.setState ({
         stages : stages
      }) 
   });

   database.ref('tasks').on ('value', res => {
      let tasks = [];
      res.forEach ( snap  => {
          const task = snap.val();
          tasks.push (task)
      })      
      store.setState ({
         tasks : tasks
      }) 
   });   
}

export function  addStage (text) {

   let stages = [...store.getState().stages];
  //  Regresa el actual árbol de estado de tu aplicación.
  // ... para clonar un array del store
   stages.push (  text )
   database.ref('stages').push (text);
}

export function  addTask (stage, text) {
   console.log ('addTask:', stage + ' - ' +  text);

   let tasks = [...store.getState().tasks];

   let newTask = {
      id : store.getState().tasks.length,
      title: text,
      stage : stage
   } 

   database.ref('tasks/' + newTask.id).set (newTask);
}
