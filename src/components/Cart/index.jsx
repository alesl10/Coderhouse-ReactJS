import { useContext } from "react";
import { Context } from '../../context'
import './cart.css'
// import {
//     addDoc,
//     collection,
//     doc,
//     getFirestore,
//     updateDoc,
// } from 'firebase/firestore';




function Cart() {

    const { productsAdded, removeItem, clearCart } = useContext(Context);
    // const db = getFirestore();

    // function updateOrder(productId, FinalStock) {
    //     const itemRef = doc(db, "products", productId);
    //     updateDoc(itemRef, { stock: FinalStock }).catch((err) => console.log(err))
    // }

    // function sendOrder() {
    //     const collectionRef = collection(db, "orders");
    //     const total = productsAdded.reduce((acc, product) => acc + product.quantity * product.precio, 0)
    // }

    // const order = {
    //     comprador: { name: "alexis", email: "alasf@ejemplo.com", cel: "165444644" },
    //     items: productsAdded,
    //     total,
    // }

    // addDoc(collectionRef, order)
    //     .then(() => {
    //         productsAdded.map((product) => {
    //             const FinalStock = product.stock - product.quantity;
    //             updateOrder(product.id, FinalStock);
    //         })
    //     })
    //     .catch((err) => console.log(err))

    function totalProduct(product) {
        const precioParcial = product.precio * product.quantity;
        return precioParcial;
    }

    function total() {
        const cartFinal = productsAdded.reduce((acc, product) => acc + (product.precio * product.quantity), 0);
        return cartFinal;
    }


    return (
        <div>
            <span>{productsAdded.map((product) => {
                return (
                    <div className="contenedorCarrito">
                        <div>
                            <img src={product.img} alt="imagen producto a comprar" className="imgCart" />
                        </div>
                        <div className="descCarrito">
                            <span>{product.descripcion} - {product.fragancia} - </span>
                            <span> Cantidad: {product.quantity} - </span>
                            <span> <b>Precio unidad $ {product.precio} |  $ {totalProduct(product)}</b> </span>
                        </div>
                        <button onClick={() => removeItem(product.id)}>Eliminar producto</button>
                    </div>
                )
            }
            )}</span>
            <div className="finalCart">
                <h2>Precio total a pagar: $ {total()}</h2>
                <div ><button className="cartButton">Terminar compra</button><button className="cartButton" onClick={() => clearCart()}>Vaciar carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;