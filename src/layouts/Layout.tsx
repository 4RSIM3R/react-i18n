import { Footer } from "@/partials/Footer"
import { Header } from "@/partials/Header"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}