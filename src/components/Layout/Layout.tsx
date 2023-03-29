import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Header />
      <div className="layoutMainWrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
