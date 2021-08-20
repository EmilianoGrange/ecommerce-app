import ItemCount from "../../components/ItemCount";

const ItemListContainer = ({greeting}) => {
    let stock = 10;

    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} items al carrito`);
    }

    return (
        <>
            <h1>{greeting}</h1>
            <br/>
            <br/>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;