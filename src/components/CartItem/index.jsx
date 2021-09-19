import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartItem = ({objeto, agregar, remover, menosUno}) => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col><img src={objeto.item.pictureUrl} alt={`${objeto.item.description}`} /></Col>
                    <Col><p>{objeto.item.title}</p></Col>
                    <Col><p>${objeto.item.price}</p></Col>
                    <Col>
                        <button onClick={() => agregar(objeto.item, 1)}>+</button>
                        <p>{objeto.quantity}</p>
                        <button onClick={() => menosUno(objeto.item.id)}>-</button>
                    </Col>
                    <Col><button onClick={() => remover(objeto.item.id)}><FontAwesomeIcon className='' icon={faTrashAlt}/></button></Col>
                </Row>
            </Container>
        </>
    )
}

export default CartItem;