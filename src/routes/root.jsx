import ItemListContainer from "../components/itemListContainer"
import { useParams } from "react-router-dom"

function Root() {
const params = useParams();
const isCategoryRoute = Boolean(params.id);

  return (
    <main>
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id} />
    </main>
  )
}

export default Root
