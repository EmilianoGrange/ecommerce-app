import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './estilo.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count<stock ? setCount(count + 1) : console.log('No hay mas articulos disponibles');
    }

    const restar = () => {
        count>initial ? setCount(count - 1) : console.log('Al menos debe incluirse 1 articulo');
    }

    return (
        <div className="contador">
            <div className="contador-inner">
                <Button variant="outline-primary" onClick={restar}>-</Button>
                <p>{count}</p>
                <Button variant="outline-primary" onClick={sumar}>+</Button>
            </div>
            <Button disabled={!stock} variant="dark" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;