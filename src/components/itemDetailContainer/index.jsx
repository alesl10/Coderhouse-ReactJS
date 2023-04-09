import { useState } from "react"
import ItemDetail from "../itemDetail"
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "products", params.id);

        getDoc(itemRef)
            .then((result) => {
                if (result.exists()) {
                    setProducts({ id: result.id, ...result.data() });
                    setLoading(false);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {loading ? <h2>Cargando...</h2> : "" }
            <ItemDetail product={products} />
        </div>
    )
}

export default ItemDetailContainer;