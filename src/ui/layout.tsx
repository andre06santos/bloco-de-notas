import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export {Layout}