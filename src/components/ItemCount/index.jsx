import "./itemCount.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";



function ItemCount({ stock, onAdd }) {
    const [cant, setCant] = useState(1);


    return (
        <Container>
            <div >
                <div className="lineaBotones">
                    <div>
                        <Button
                            variant="dark"
                            className="controls"
                            onClick={() => setCant((prevState) => prevState - 1)}
                            disabled={cant < 2}
                        >
                            -
                        </Button>
                    </div>

                    <div >{cant}</div>
                    <div>
                        <Button
                            variant="dark"
                            className="controls"
                            disabled={cant === stock}
                            onClick={() => setCant((prevState) => prevState + 1)}
                        >
                            +
                        </Button>
                    </div>
                </div>
                <div >
                    <Button variant="dark" onClick={() => {
                        onAdd(cant);
                        console.log(cant);
                    }
                    }>
                        Añadir al carrito
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default ItemCount;
