import Spinner from "react-bootstrap/Spinner";
import {useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail';

const URL = 'https://mocki.io/v1/d394ca31-3994-4ab8-b0e4-7f24286114e4';
const ID = 1;

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect ( () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setItem(data.find(el => el.id === ID)))
    },[]);

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