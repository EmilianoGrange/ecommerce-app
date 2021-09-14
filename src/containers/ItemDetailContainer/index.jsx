import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../../components/ItemDetail';

const URL = 'https://mocki.io/v1/a20df978-de80-4465-aaf8-096b42601b5a';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect ( () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setItem(data.find(el => el.id === parseInt(id))))
    },[id]);

    return (
        <>
            { item !== null ?
                <ItemDetail producto={item} />
            :
            (
                <>
                    <br/>
                    <Spinner animation='border' />
                    <br/>
                    <h2>Cargando...</h2>
                </>
            )
            }
        </>
    )
}

export default ItemDetailContainer;