import { useEffect, useState } from "react";
import ItemList from "../itemList";
import './itemListContainer.css';

import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';

function ItemListContainer({ categoryId, isCategoryRoute }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(isCategoryRoute)

    const getDocsFromFirebase = async (collection) => {
        await getDocs(collection)
            .then((result) => {
                const docs = result.docs;
                setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");

        if (isCategoryRoute) {
            const queryResult = query(
                itemsCollection,
                where("categoria", "==", categoryId)
            );

            getDocsFromFirebase(queryResult);
            setLoading(false);
        } else {
            getDocsFromFirebase(itemsCollection)
            setLoading(false);
        }
    }, [categoryId]);

    console.log(products);

    return (
        <main className="contenedorProducts">
            {loading ? <h2>Cargando...</h2> :
                <ItemList products={products} />}
        </main>
    )
}

export default ItemListContainer;