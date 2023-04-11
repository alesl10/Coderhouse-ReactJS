import { useContext } from "react";
import { Context } from '../../context'
import './cart.css'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Cart() {

    const { productsAdded, removeItem, clearCart, total } = useContext(Context);

    function totalProduct(product) {
        const precioParcial = product.precio * product.quantity;
        return precioParcial;
    }

    return (
        <div>
            {productsAdded.length > 0 ?
                <main>
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
                                <Button onClick={() => removeItem(product.id)}>Eliminar producto</Button>
                            </div>
                        )
                    }
                    )}</span>
                    <div className="finalCart">
                        <h2>Precio total a pagar: $ {total()}</h2>
                        <div >
                            <NavLink to="/checkout"><Button className="cartButton">Terminar compra</Button></NavLink>
                            <Button className="cartButton" onClick={() => clearCart()}>Vaciar carrito</Button>
                            <NavLink to="/"><Button className="cartButton">Seguir comprando</Button></NavLink>

                        </div>
                    </div>
                </main>
                : <div className="cartEmpty">
                    <h2>Oops! No tienes productos en el carrito</h2>
                    <NavLink to="/"><Button>Volver al home!</Button></NavLink>
                </div>}
        </div>
    )
}

export default Cart;