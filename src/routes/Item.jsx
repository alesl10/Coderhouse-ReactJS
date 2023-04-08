import ItemDetailContainer from "../components/itemDetailContainer";
import { useParams } from "react-router-dom";


function ItemRoot() {
    const parametros = useParams();

    return (
        <main>
            <ItemDetailContainer itemId={parametros.id} />
        </main>
    )
}

export default ItemRoot;
