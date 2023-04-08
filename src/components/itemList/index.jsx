import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../item';

function ItemList({ products }) {
    return (
        <Container>
            <Row className='gap-5'>
                {products.map((product, index) => (
                <Item product={product} key={product.id}/>
                ))}
            </Row>
        </Container>
    )
}

export default ItemList;