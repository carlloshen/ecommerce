import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext() 

export const ProductProvider = ({children}) =>{
    const [product, setProducts] = useState(JSON.parse(localStorage.getItem('prod_ref')) || {})

    useEffect(() =>{
        localStorage.setItem('prod_ref', JSON.stringify(product))
    },[product])

    return (
        <ProductContext.Provider value={{product, setProducts}}>{children}</ProductContext.Provider>
    )
}