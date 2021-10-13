# Reactjs - CoderHouse

[![GitHub Profile](https://img.shields.io/badge/GitHub-informational?style=for-the-badge&logo=GitHub&logoColor=171515&color=23272d)](https://github.com/EmilianoGrange)
[![Contact Me](https://img.shields.io/badge/Email-informational?style=for-the-badge&logo=Mail.Ru&logoColor=fff&color=23272d)](mailto:insignificance69@hotmail.com)

# Información del proyecto

Proyecto final para el curso de Reactjs en [CoderHouse](https://www.coderhouse.com): un e-commerce implementado con React, React Router, React Hooks, Bootstrap y Firebase-Firestore como base de datos.

## Convenciones

-   Se utilizan componente basados en funciones y ES6+.
-   Se utiliza la notacion PascalCase para nombrar los componentes, y la notacion camelCase para funciones/metodos y variables; para las clases de css, kebab-case (para mantener coherencia con las clases de Bootstrap).
-   Se emplea el patron Custom Provider.

## Flujo de Compra

Es posible agregar productos al carrito desde el home (lista con todos los productos), desde una categoria especifica, o desde el detalle de cada producto. Pueden incorporarse uno o múltiples items. Tambien es posible agregar mas items del mismo producto en el propio carrito. En caso de no haber stock se indica en el detalle, y esta deshabilitado el boton de Agregar al carrito. En el checkout, el usuario completa sus datos y recibe confirmacion de su orden, proporcionandose un id de compra.

## Componentes mas relevantes

### Home/Categorias/Detalle

-   Con el Hook de useEffect y una promesa (firebase), se obtiene la informacion a mostrar en estos componentes con cada re-renderizado. Se mostraran en lista tipo cards, o el item individual.
-   Con el componente "Link" de react-router-dom es posible redireccionar al usuario a las diferentes rutas.

### Cart

-   Con el Hook de useContext se obtienen las funciones y propiedades del cart.
-   Se emplea tambien localStorage para mantener los items en el cart.
-   Se muestran la imagen, el precio y otros detalles de cada producto, y es posible agregar, quitar o eliminar items del mismo producto, o vaciar el carrito en su totalidad.

### CartWidget

-   Con el Hook de useContext se actualiza el indicador del cart, y con render condicional, solo se muestra cuando hay items en el.
-   Con el componente "Link" de react-router-dom puede redireccionarse al layout del cart.

### Checkout

-   El checkout es simple: muestra el total y un formulario que permite ingresar los datos del usuario; tras confirmar la compra muestra un mensaje apropiado.

## TODOs
- Validar formularios.
- Filtros de productos.
- Mostrar el ID de la orden y agregar una API de pago.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.