import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <div className="Layout">
      <Header />
      <div className="LayoutMainWrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
