import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount';
import { contexto } from '../../context/CartContext';
import './estilo.css';

const ItemDetail = ( {producto} ) => {
    const [compra, setCompra] = useState(false);
    const {addItem} = useContext(contexto);

    const onAdd = (cantidad) => {
        addItem(producto, cantidad);
        setCompra(true);
    };

    return (
        <div className='detalle'>
            <img src={producto.pictureUrl} alt={`${producto.description}`} />
            <h2>{producto.description}</h2>
            <h3>Precio: ${producto.price}</h3>

            {compra ?
                <Button variant='dark' className='btn-fin'>
                    <Link to={'/cart'} className='link'>Terminar mi compra</Link>
                </Button>
                :
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            }
            {!producto.stock ? <span>Sin stock</span> : <></>}
        </div>
    )
};

export default ItemDetail;