import store from '../store/store'
import {auth, database} from './firebase';

export function signUp (fullname, email, pass, survey) 
{
   console.log ('signUp' + fullname + email + pass);

   auth.createUserWithEmailAndPassword (email, pass).then ( user => {
      let newuser = {
         fullname, email
      }
      database.ref ('users/' + user.uid).set (newuser);   

      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : user.uid,
               email :  fullUserInfo.email,
               fullname :  fullUserInfo.fullname,
            }
         })
      })

   })
   
}

export function signOut () {
   auth.signOut();
   store.setState ( {
      successLogin : false,
      user: {
         id :'',
         email :  ''
      }
   })
}

export function signIn (user, pass) {
   auth.signInWithEmailAndPassword(user, pass).then (userObj => {

      database.ref ('users/' + userObj.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : userObj.uid,
               email :  fullUserInfo.email,
               fullname :  fullUserInfo.fullname,
            }
         })
      })
   })
}


auth.onAuthStateChanged(user => {
   if (user) {
      console.log('user', user);
      let usersRef = database.ref('/users');
      let userRef = usersRef.child(user.uid);
      store.setState ( {
         successLogin : true
      })
   }
});