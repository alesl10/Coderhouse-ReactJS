import NavBar from "../navBar"
import Footer from "../footer"
import { Outlet as Page } from "react-router-dom"

function Layout() {
    return (
        <main>
            <NavBar />
            <Page />
            <Footer />
        </main>
    )
}

export default Layout