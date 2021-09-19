import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {contexto} from '../../context/CartContext';
import './estilo.css';

const CartWidget = () => {
    const {cartIndicator} = useContext(contexto);

    return (
        <>
            <button className='btn-cart'><FontAwesomeIcon className='cart' icon={faShoppingBag}/></button>
            <span className='cart-num'>{cartIndicator}</span>
        </>
    );
}

export default CartWidget;