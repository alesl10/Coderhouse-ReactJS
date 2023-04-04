import products from "../../mocks/products";
import { useEffect, useState } from "react";
import ItemList from "../itemList";

function ItemListContainer({ isCategoryRoute, CategoryId }) {
    const [listaProdu, setListaProdu] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) =>
            setTimeout(() => resolve(products), 2000)
        );
        
        productsPromise
            .then((response) => {
                if (isCategoryRoute) {
                    const productsFiltered = response.filter(
                        (elem) => elem.category === CategoryId
                    );

                    setListaProdu(productsFiltered);
                } else {
                    setListaProdu(response);
                }
            })
            .catch((err) => console.log(err));
    }, [CategoryId]);


    return (
        <main>
            <ItemList productos={listaProdu} />
        </main>
    )
}

export default ItemListContainer;