import {  useReducer } from "react";
import { createContext } from "react";
import { data } from "../utils/data";
import { reducer } from "./reducer";

export const FlowerContext = createContext();

const FlowersContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        data: localStorage.getItem('flowers') ? JSON.parse(localStorage.getItem('flowers')) : data,
        products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
        basket: false
    })

    console.log(state, 'state')

    localStorage.setItem("flowers", JSON.stringify(state.data))
     localStorage.setItem("products", JSON.stringify(state.products))

    return(
        <FlowerContext.Provider value={[state, dispatch]}>
            {children}
        </FlowerContext.Provider>
    )
}

export default FlowersContext