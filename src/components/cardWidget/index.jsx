import { useContext } from "react";
import "./cartWidget.css"
import { Context } from "../../context";
import { NavLink } from "react-router-dom";


function CartWidget() {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3164/3164729.png"

    const { productsAdded } = useContext(Context);

    return (
        <div className="cart-widget">
            <NavLink to={"/cart"}> <img src={imgCarrito} alt="imagen de carrito" width="60px" /></NavLink>
           {productsAdded.length > 0 ?  <span>{productsAdded.length}</span> : "" }
        </div>
    )
}


export default CartWidget;