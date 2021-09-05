import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const getData = new Promise((res, rej) => {
            setTimeout(() => {
              res(
                [
                    {
                        "id": 1,
                        "title": "Pampers Confort Sec XXG",
                        "description": "Pañales Pampers",
                        "categoria": 1,
                        "price": 2000,
                        "pictureUrl": "../productos/img/pampersCSXXG.jpeg",
                        "stock": 25
                    },
                    {
                        "id": 2,
                        "title": "Baby Sec Premium G",
                        "description": "Pañales Baby Sec",
                        "categoria": 2,
                        "price": 1800,
                        "pictureUrl": "../productos/img/bsecPG.jpeg",
                        "stock": 20
                    },
                    {
                        "id": 3,
                        "title": "Pampers Confort Sec G",
                        "description": "Pañales Pampers",
                        "categoria": 1,
                        "price": 1900,
                        "pictureUrl": "../productos/img/pampersCSG.jpg",
                        "stock": 15
                    },
                    {
                        "id": 4,
                        "title": "Pampers Pants Ajuste Total XG",
                        "description": "Pañales Pampers",
                        "categoria": 1,
                        "price": 1800,
                        "pictureUrl": "../productos/img/pampersATXG.jpg",
                        "stock": 17
                    },
                    {
                        "id": 5,
                        "title": "Huggies Active Sec P",
                        "description": "Pañales Huggies",
                        "categoria": 3,
                        "price": 1700,
                        "pictureUrl": "../productos/img/huggiesP.png",
                        "stock": 23
                    },
                    {
                        "id": 6,
                        "title": "Baby Sec UltraSec XG",
                        "description": "Pañales Baby Sec",
                        "categoria": 2,
                        "price": 1200,
                        "pictureUrl": "../productos/img/bsecUSXG.jpg",
                        "stock": 32
                    }
                ]
              );
            }, 2000);
        });

        getData.then((data) => {
            if(id) {
                let aux = data.filter((el) => el.categoria === parseInt(id));
                setProductos(aux);
            }
            else {
                setProductos(data);
            }
        })
    }, [id]);

    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} items al carrito`);
    }

    return (
        <>
            <h1>{greeting}</h1>
            <br/>
            { productos.length ? <ItemList productos={productos} onAdd={onAdd}/> :
            (
                <>
                    <Spinner animation="border" />
                    <br/>
                    <h2>Cargando...</h2>
                </>
            )
            }
            <br/>
        </>
    );
}

export default ItemListContainer;