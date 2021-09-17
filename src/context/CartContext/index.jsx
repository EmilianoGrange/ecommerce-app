import { createContext, useState } from "react";

export const contexto = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            let aux = cart.map((producto)  => {
                if(producto.item.id === item.id){
                    producto.quantity = producto.quantity + quantity;
                }
                return producto;
            });
            setCart([...aux]);
        }
        else {
            const prod = {
                item,
                quantity
            }
    
            setCart([...cart, prod]);
        }
        console.log(cart);
    }

    const removeItem = (itemId) => {
        let aux = cart.filter( el => el.item.id !== itemId);      
        setCart(aux);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => cart.some(el => el.item.id === id);

    return (
        <contexto.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </contexto.Provider>
    )
};