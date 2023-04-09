import { useContext } from "react";
import { Context } from '../context'
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc,
} from 'firebase/firestore';




function Checkout() {

    const { productsAdded, clearCart } = useContext(Context);
    const db = getFirestore();

    function updateOrder(productId, FinalStock) {
        const itemRef = doc(db, "products", productId);
        updateDoc(itemRef, { stock: FinalStock }).catch((err) => console.log(err))
    }

    function sendOrder() {

        const collectionRef = collection(db, "orders");
        const total = productsAdded.reduce((acc, product) => acc + (product.precio * product.quantity), 0)

        const order = {
            comprador: { name: "alexis", email: "alasf@ejemplo.com", cel: "165444644" },
            items: productsAdded,
            total,
        }
        console.log()

        addDoc(collectionRef, order)
            .then(() => {
                productsAdded.map((product) => {
                    const FinalStock = product.stock - product.quantity;
                    updateOrder(product.id, FinalStock);
                })
            })
            .catch((err) => console.log(err))
        alert("muchas Gracias por tu compra");

        setTimeout(() => {
            clearCart();
        }, 1000)
    }



    return (
        <Container >
            {
                productsAdded.map((product) => (
                    <div>
                        <span>Nombre: {product.fragancia}</span>
                        <br />
                        <span>Quantity: {product.quantity}</span>
                    </div>
                ))
            }

            {productsAdded.length > 0 ? < NavLink to="/" ><Button onClick={sendOrder}>Pagar</Button></NavLink> : <h2 className="checkout">No tienes nada por pagar</h2> }
        </Container >
    )
}

export default Checkout;