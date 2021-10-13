import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { contexto } from '../../context/CartContext';
import { generarOrden } from '../../firebase';
import './estilo.css';

const Checkout = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setMail] = useState('');
    const [pedido, setPedido] = useState(false);

    const {cart, total, clear} = useContext(contexto);

    function guardarOrden (event) {
        event.preventDefault();

        const buyer = {
            name,
            phone,
            email
        }

        generarOrden (buyer, cart, total);
        clear();
        setPedido(true);
    };

    const saveName = (e) => {
        setName(e.target.value);
    };

    const savePhone = (e) => {
        setPhone(e.target.value);
    };

    const saveMail = (e) => {
        setMail(e.target.value);
    };

    return (
        <>
            {pedido ? <h2>Gracias por tu compra! Te enviaremos un mail con los detalles</h2>
            :
            <>
                <h2>{cart.length} productos</h2>
                <h2>${total}</h2>
                <Form className='formulario'>
                    <Form.Group className='mb-3 w-50' controlId='formBasicName'>
                        <Form.Label>Nombre y Apellido:</Form.Label>
                        <Form.Control type='name' placeholder='Juan Perez' onChange={saveName}/>
                    </Form.Group>

                    <Form.Group className='mb-3 w-50' controlId='formBasicPhone'>
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type='phone' placeholder='000 111-2222' onChange={savePhone}/>
                    </Form.Group>

                    <Form.Group className='mb-3 w-50' controlId='formBasicEmail'>
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type='email' placeholder='xxxx@yyy.com' onChange={saveMail}/>
                    </Form.Group>
                </Form>
                <Button variant='primary' onClick={guardarOrden}>Realizar Pedido</Button>
            </>
            }
        </>
    );
};

export default Checkout;
