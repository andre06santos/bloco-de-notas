import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="rota_principal">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { Layout };
