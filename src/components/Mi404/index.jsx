import { Link } from 'react-router-dom';

const Mi404 = () => (
    <>
        <h1>404</h1>
        <h2>Esa pagina no existe</h2>
        <Link to='/' className='enlace'><h3>Volver a la tienda</h3></Link>
    </>
);

export default Mi404;