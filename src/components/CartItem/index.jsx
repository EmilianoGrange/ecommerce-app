import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './estilo.css';

const CartItem = ({objeto, agregar, remover, menosUno}) => (
    <Container fluid>
        <Row>
            <Col><img src={objeto.item.pictureUrl} alt={`${objeto.item.description}`} /></Col>
            <Col><p className='celda'>{objeto.item.title}</p></Col>
            <Col><p className='celda'>${objeto.item.price}</p></Col>
            <Col>
                <Button id='boton-1' onClick={() => agregar(objeto.item, 1)} variant='outline-primary'>+</Button>
                <p>{objeto.quantity}</p>
                <Button onClick={() => menosUno(objeto.item.id)} variant='outline-primary'>-</Button>
            </Col>
            <Col><Button id='boton-2' onClick={() => remover(objeto.item.id)} variant='danger'><FontAwesomeIcon icon={faTrashAlt}/></Button></Col>
        </Row>
    </Container>
);

export default CartItem;