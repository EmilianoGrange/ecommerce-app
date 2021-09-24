import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../../components/ItemCount';
import { contexto } from '../../context/CartContext';
import './estilo.css';

const Item = ({producto}) => {
    const {addItem} = useContext(contexto);
    /* console.log(producto);
    console.log(producto.id); */

    const onAdd = (cantidad) => {
        addItem(producto, cantidad);
        console.log(`Agregaste ${cantidad} items al carrito`);
    };

    return (
        <Card className='text-center item'>
            <Card.Img className='img-card' variant='top' src={producto.pictureUrl} alt={`${producto.description}`}/>
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                <Link to={`/item/${producto.id}`} ><Button variant='primary'>Ir al detalle</Button></Link>
            </Card.Body>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        </Card>
    )
};

export default Item;