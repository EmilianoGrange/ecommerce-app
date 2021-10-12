import { createContext, useState } from 'react';

export const contexto = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            let aux = cart.map((producto) => {
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
    }

    const removeItem = (itemId) => {
        let aux = cart.filter(el => el.item.id !== itemId);
        setCart(aux);
    }

    const removeOne = (itemId) => {
        let aux = cart.map((p)  => {
            if(p.item.id === itemId && p.quantity>1) {
                    p.quantity = p.quantity -1;
            }
            return p;
        });
        setCart([...aux]);
    }

    const cartIndicator = cart.reduce((acum, e) => acum += e.quantity, 0);

    const cartTotal = () => setTotal(cart.reduce((acum, e)=> acum += e.item.price * e.quantity , 0));

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => cart.some(el => el.item.id === id);

    return (
        <contexto.Provider value={{cart, cartTotal, total, addItem, removeItem, removeOne, cartIndicator, clear}}>
            {children}
        </contexto.Provider>
    )
};