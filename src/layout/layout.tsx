import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";
import "./layout.css";

const Layout = ({ children }: any) => {
  const showPath = () => {
    switch (window.location.pathname) {
      case "/signUp":
      case "/login":
        return false;
      default:
        return true;
    }
  };

  return (
    <div className="layout">
      {showPath() && <Header />}
      <div className="layoutWrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
