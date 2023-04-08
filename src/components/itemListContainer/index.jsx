import Products from "../../mocks/Products";
import { useEffect, useState } from "react";
import ItemList from "../itemList";
import './itemListContainer.css';

function ItemListContainer({ categoryId, isCategoryRoute }) {

    const [products, setProducts] = useState([]);
    console.log(isCategoryRoute)

    useEffect(() => {

        const productsPromise = new Promise((resolve, reject) =>
            setTimeout(() => resolve(Products), 2000)
        );

        productsPromise
            .then((response) => {
                if(isCategoryRoute) {
                const productsFilter = response.filter(
                    (product) => product.categoria === categoryId);
                setProducts(productsFilter);
            }else {
                setProducts(response)
            }
            })
            .catch((err) => console.log(err));
    }, [categoryId]);

    console.log(products);

    return (
        <main className="contenedorProducts">
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer;