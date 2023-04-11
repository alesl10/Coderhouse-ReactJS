import { useContext, useState } from "react";
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

    const { productsAdded, clearCart, total } = useContext(Context);
    const db = getFirestore();
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');



    function updateOrder(productId, FinalStock) {
        const itemRef = doc(db, "products", productId);
        updateDoc(itemRef, { stock: FinalStock }).catch((err) => console.log(err))
    }

    function sendOrder(nombre, email, celular) {

        const collectionRef = collection(db, "orders");
        const total = productsAdded.reduce((acc, product) => acc + (product.precio * product.quantity), 0)

        const order = {
            comprador: { nombre: nombre, email: email, celular: celular },
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

    const handleSubmit = (event) => {
        event.preventDefault();
        sendOrder(nombre, email, celular);
    };



    return (
        <Container >

            {productsAdded.length > 0 ?
                <div>
                    <h2 className="checkout">Formulario de compra</h2>
                    <form onSubmit={handleSubmit} >

                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label='Nombre y Apellido' required placeholder='Nombre y apellido' />

                        <br />

                        <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required aria-label='Telefono' placeholder='Telefono' />

                        <br />

                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label='email' placeholder='Email' />

                        <br />
                        <br />
                        <Button type="submit" >Comprar</Button>
                        <br />
                    <h3 className="checkout">Detalle de compra:</h3>
                    </form>
                </div>
                : <div className="checkout">
                    <h2 >No tienes nada por pagar</h2>
                    <Button  >Volver al Home !</Button>
                    </div>}
            {
                productsAdded.map((product) => (
                    <div>
                        <span>Nombre: {product.fragancia}</span>
                        <br />
                        <span>Quantity: {product.quantity}</span>
                    </div>
                ))
            }
            <h3><b>Total: $ {total()}</b></h3>
        </Container >
    )
}

export default Checkout;