import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}