import { createContext, useState } from "react";


export const Context = createContext();
export function GlobalProvider({ children }) {
    const [productsAdded, setProductsAdded] = useState([]);
    console.log(productsAdded)
    function onAdd(product, quantity) {
        const isAlreadyAdded = isInCart(product);

        if (isAlreadyAdded) {
            const productToModify = productsAdded.find((productsAdded) => productsAdded.id === product.id
            );

            const productModified = {
                ...productToModify,
                quantity: productToModify.quantity + quantity
            };

            setProductsAdded((prevState) => prevState.map((productsAdded) =>
                productsAdded.id === product.id ? productModified : productsAdded
            ));
        } else {
            setProductsAdded((prevState) =>
                prevState.concat({ ...product, quantity }));
        }
    }

    function isInCart(product) {
        return productsAdded.some((productsAdded) => productsAdded.id === product.id);
    }

    function removeItem(id) {
        const remove = productsAdded.filter((product) => product.id !== id);
        setProductsAdded(remove);
    }
    function clearCart() {
        setProductsAdded([]);
    }

    function total() {
        const cartFinal = productsAdded.reduce((acc, product) => acc + (product.precio * product.quantity), 0);
        return cartFinal;
    }

    const value = {
        productsAdded,
        onAdd,
        removeItem,
        clearCart,
    }

    return <Context.Provider value={{productsAdded, onAdd, removeItem, clearCart, total }}>{children}</Context.Provider>;
}
