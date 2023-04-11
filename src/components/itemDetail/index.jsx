import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount'
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './itemDetail.css';
import { Context } from '../../context'


function ItemDetail({ product }) {
    const { onAdd } = useContext(Context);
    const [added, setAdded] = useState(0);

    function onAddProducto(cant) {
        setAdded(cant);
        onAdd(product, cant);
    }

    return (
        <Container>
            <div>
                <div className="contenedorGeneral">
                    <div >
                        <img className="imgProdu"
                            src={product.img}
                            alt="imagen de producto"
                        />
                    </div>
                    <div className="informacion" >
                        <h2>{product.categoria} {product.fragancia}</h2>
                        <p>Precio: $ {product.precio}</p>
                        <span>{product.descripcion}</span><br />
                        <span>{product.detalle}</span><br />
                        <span><b>Stock: {product.stock}</b></span><br />

                        <div>
                            {added == 0 && (
                                <ItemCount stock={product.stock} onAdd={onAddProducto} />
                            )}
                            <div>
                                {added >= 1 && (
                                    <div>
                                        <NavLink to="/cart">
                                            <Button className="buttonDetail">Ir al carrito</Button>
                                        </NavLink>
                                        <NavLink to="/">
                                            <Button className="buttonDetail">Seguir comprando</Button>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Container>
    )
}

export default ItemDetail