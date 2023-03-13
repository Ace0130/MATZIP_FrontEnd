import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  section: ReactNode;
}

const Layout = ({ section }: Props) => {
  return (
    <div>
      <Header />
      {section}
      <Footer />
    </div>
  );
};

export default Layout;
