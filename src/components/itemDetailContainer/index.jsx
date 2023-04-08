import { useState } from "react"
import ItemDetail from "../itemDetail"
import { useEffect } from "react";
import Products from "../../mocks/Products";


function ItemDetailContainer({itemId}) {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(Products), 1000)
        );
        productsPromise.then((resp) => {
            const productSearch = resp.find(elem => elem.id == itemId);
            setProducts(productSearch);
        })
        .catch((err) => console.log(err));
    }, [itemId]);



    return (
        <div>           
            <ItemDetail product={products}/>
        </div>
    )
}

export default ItemDetailContainer;