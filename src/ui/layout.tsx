import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export {Layout}