import {types} from '../types/types'

const initialState = {
    authenticated: false,
    error: null,
    loading: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                authenticated: true,
                uid: action.payload.uid,
                name: action.payload.name,
                error: null
            }
        case types.startLoading:
            return {
                ...state,
                loading: true
            }    
        case types.endLoading:
            return {
                ...state,
                loading: false
            }    
        case types.logout:
            return { 
                authenticated: false
            }
        case types.loginError:
            return {
                authenticated: false,
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer