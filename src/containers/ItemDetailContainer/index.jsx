import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../../components/ItemDetail';
import {firestore} from '../../firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const collection = firestore.collection('productos');
        const producto = collection.doc(id);
        producto.get().then(doc => {
            setItem(doc.data());
        }).catch(error => {
            console.log('error', error);
        })
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