import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../../components/ItemList';
import {firestore} from '../../firebase';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [fetched, setFetched] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        let collection;
        id ? collection = firestore.collection('productos').where('category','==',id)
        :
        collection = firestore.collection('productos');

        collection.get().then((query) => {
            setProductos(query.docs.map(doc => ({...doc.data(), id: doc.id})));
        }).catch(error => {
            console.log('error', error);
        }).finally(() => {
            setFetched(true);
        })
    }, [id]);

    return (
        <>
            {id ? <></> : <h1>{greeting}</h1>}
            <br/>
            { fetched ? <ItemList productos={productos} />
            :
            (<>
                <Spinner animation='border' />
                <br/>
                <h2>Cargando...</h2>
            </>)
            }
        </>
    );
}

export default ItemListContainer;