import {createContext, useReducer} from 'react'
import AlertReducer from './AlertReducer'

export const AlertContext = createContext();


export const AlertProvider = ({children}) =>{

    const initialState = null;

    let [state, dispatch] = useReducer(AlertReducer, initialState);





    return <AlertContext.Provider value={{alert:state}}> {children}</AlertContext.Provider>
}