import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDdg9b4h5UkEVULXdf4PPZsIdCuRRr2BHU",
    authDomain: "react-app-eg.firebaseapp.com",
    projectId: "react-app-eg",
    storageBucket: "react-app-eg.appspot.com",
    messagingSenderId: "1067145950283",
    appId: "1:1067145950283:web:dd7f739cdef4e0368c09ce"
});

export function getFirebase () {
    return app;
}

export const firestore = firebase.firestore(app);

export const generarOrden = (buyer, items, total) => {
    const collection = firestore.collection('ordenes');
    const orden = {
        buyer,
        items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total
    };
    return collection.add(orden);
}