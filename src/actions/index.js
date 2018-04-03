import axios from 'axios'
import {AT_USERS} from './action-type';
const END_POINT = "http://localhost:3000";



export function createUser(info_user){    // on créé un user en dur a patir de la fonction qui est dans le register, et on dipstach les info au Reduceer AT_USER.INFO et on lui envoi le payload user//
    return function (dispatch){
        let user = {
            "information":{"pseudo": "lotfi78", "prenom": "lotfi", "nom": "baadji", "email": "lotfi.baadji@gmail.com", "orientation": "", "age": "", "sex": "", "bio": ""},
            "picture":{"avatar": "../../avatar.png"}
        }
        dispatch({type: AT_USERS.INFO, payload: user})
    }
}

export function InfoUser(state, value, input, objet){   // --> Cette action prend 3 parametre  mais pour pouvoir y acceder dans le profil on doit dabord acceder au props a graver this.props.InfoUer
     return function (disptach){                        // le premier c'est le state qui fait reference this.props.user, qui la varible qui contien le state de tt les reducer user, 
                                                        // le 2eme c'est la valeur de ce qui est taper a chaque fois a travers le e.targer.value.....                      
        let info = {...state};                          // --> info est égale a chaque parti du state sachache que les ... on exploser le state
         info[objet][input] = value;                    // --> info est egle a la valeur de ce qui se trouve dans objet de inpute donc dans ex dans information et pseudo 
        disptach({type: AT_USERS.INFO, payload: info})  // --> la cette a action va etre apeller a chaque fois que dans le document profil un changement et operer sur les input 
    }
}



      export function UpdateUser(state, e){  
        console.log("state de action Update: ", state)
        e.preventDefault()
        return function (dispatch){
            dispatch({type: AT_USERS.UPDATE, payload: state})
        }
    }

    export function ReadUser(id){
        console.log("jai actualiser")
         return function (dispatch){
            let user = {
                "information":{"pseudo": "lotfi78", "prenom": "lotfi", "nom": "baadji", "email": "lotfi.baadji@gmail.com", "orientation": "", "age": "", "sex": "", "bio": ""},
                "picture":{"avatar": "../../avatar.png"}
                    }
        dispatch({type: AT_USERS.READ, payload: user})    
        }
    }

    export function imgInfo(e, state, avatar){
        return function (dispatch){
        let reader = new FileReader();
        let file = e.target.files[0];
        let ret = {...state}
        reader.onloadend = () => {
            ret.picture[avatar] = reader.result;
            dispatch({type: AT_USERS.INFO, payload: ret})
        }
        reader.readAsDataURL(file)
        const formData = new FormData();
        formData.append(avatar, file);
        // axios.post(`${END_POINT}/upload`, formData, {
        // headers: { 'content-type': 'multipart/form-data' }
        // })
        }
    }

    /* export function readUser(state, value, input){
        return function (dispatch){
            let ret = {...state};
            ret[input] = value;
            dispatch({type: AT_USERS.READ , payload: ret})
        }
    } 
    
    //export function test(state){
  //  return function (dispatch){
    //    axios({
      //      method: 'post',
        //    url: `${END_POINT}/users`,
            //params: state
    //}).then((response) =>{
        //console.log("ok")
    //})
    //}
//}
*/