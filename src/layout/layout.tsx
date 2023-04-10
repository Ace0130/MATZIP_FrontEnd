import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";
import "./layout.css";

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
