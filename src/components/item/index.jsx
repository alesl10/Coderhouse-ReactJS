import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './item.css'
import { NavLink } from 'react-router-dom'
// import { Context } from '../../context';
// import { useContext } from 'react';

function Item({ product }) {


    return (

        <Col xs={3} className="cardPers">
            <img className='imgList' src={product.img} alt="imagen de producto" />
            <p>{product.categoria} </p>
            <p>{product.fragancia}</p>
            <p className="producDescription">{product.descripcion}</p>
            <Button variant="dark"><NavLink to={`/item/${product.id}`}>Ver detalle</NavLink></Button>



        </Col>
    )
}
export default Item;