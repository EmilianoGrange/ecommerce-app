import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { contexto } from '../../context/CartContext';
import CartItem from '../CartItem';
import './estilo.css';

const Cart = () => {
    const {cart, addItem, cartTotal, total, removeItem, removeOne, clear} = useContext(contexto);

    useEffect(() => {
        cartTotal()
    }, [cart, cartTotal]);

    return (
        <>
            <h2>Total: ${total}</h2>
            {cart.length ? (
                <>
                    {cart.map((el)=>(<CartItem key={el.item.id} objeto={el} agregar={addItem} remover={removeItem} menosUno={removeOne}/>))}
                    <br/>
                    <Button variant='danger' onClick={clear}>Vaciar carrito</Button>
                    <Link to='/checkout'><Button variant='primary'>Terminar compra</Button></Link>
                </>
            )
            :
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className='enlace'><h3>Volver a la tienda</h3></Link>
            </>
            }
        </>
    );
}

export default Cart;