import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../../components/Item';

const ItemList = ({productos}) => (
    <>
        {productos.length ? (
            <Row xs={1} md={2} lg={3} className='g-4'>
                {productos.map(producto => (
                    <Col key={producto.id}>
                        <Item producto={producto} />
                    </Col>
                ))}
            </Row>)
            :
            <h2>No hay productos de esa categoria</h2>
        }
    </>
);

export default ItemList;