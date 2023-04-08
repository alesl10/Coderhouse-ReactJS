import { useContext } from "react";
import "./cartWidget.css"
import { Context } from "../../context";


function CartWidget() {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3164/3164729.png"

const { productsAdded } = useContext(Context);

    return (
        <div className="cart-widget">
            <img src={imgCarrito} alt="imagen de carrito" />
            <span>{productsAdded.length}</span>
        </div>
    )
}


export default CartWidget;