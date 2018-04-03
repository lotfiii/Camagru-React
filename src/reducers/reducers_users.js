import {AT_USERS} from '../actions/action-type'

export default function ReducerUsers (state=[], action){
    console.log("Les actions USER aplé: ", action)
    switch(action.type){
        case AT_USERS.READ :
            return action.payload
        case AT_USERS.CREATE:
            return action.payload
        case AT_USERS.INFO:
            return action.payload
        case AT_USERS.UPDATE:
            return action.payload
    }
    return state
}

