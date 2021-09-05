import ItemCount from '../ItemCount';
import './estilo.css';

const ItemDetail = ( {producto, onAdd} ) => (
        <div className="detalle">
            <img src={producto.pictureUrl} alt={`${producto.description}`} />
            <h2>{producto.description}</h2>
            <h3>Precio: ${producto.price}</h3>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        </div>
);

export default ItemDetail;