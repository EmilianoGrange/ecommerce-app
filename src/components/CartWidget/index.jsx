import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import './estilo.css';

const CartWidget = () => (
    <button className="btn-cart"><FontAwesomeIcon className="cart" icon={faOpencart} /></button>
);

export default CartWidget;