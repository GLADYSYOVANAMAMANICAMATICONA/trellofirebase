import createStore from 'redux-zero'

const initialState = {
    successLogin : false,
    user : {
       id : null,
       email :  null,
       fullname :  null,
       survey :  null           
    } ,
    
   stages: [ ],
   tasks: [ ]
};

const store = createStore (initialState);
export default store;   