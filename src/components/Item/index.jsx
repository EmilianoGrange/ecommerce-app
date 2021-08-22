import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from "../../components/ItemCount";
import './estilo.css';

const Item = ({producto, onAdd}) => (
        <Card className="text-center item">
            <Card.Header>Featured</Card.Header>
            <Card.Img className="img-card" variant="top" src={producto.pictureUrl} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                <Button variant="primary">Ir al detalle</Button>
            </Card.Body>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      </Card>
);

export default Item;