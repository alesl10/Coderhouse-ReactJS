import ItemDetailContainer from "../components/itemDetailContainer";
import { useParams } from "react-router-dom";


function ItemRoot() {

    return (
        <main>
            <ItemDetailContainer />
        </main>
    )
}

export default ItemRoot;
