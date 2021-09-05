import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../../components/ItemDetail';

const URL = 'https://mocki.io/v1/d394ca31-3994-4ab8-b0e4-7f24286114e4';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect ( () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setItem(data.find(el => el.id === parseInt(id))))
    },[id]);

    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} items al carrito`);
    }

    return (
        <>
            { item !== null ?
                <ItemDetail producto={item} onAdd={onAdd}/>
            :
            (
                <>
                    <br/>
                    <Spinner animation="border" />
                    <br/>
                    <h2>Cargando...</h2>
                </>
            )
            }
        </>
    )
}

export default ItemDetailContainer;