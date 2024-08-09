import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ReactNode } from "react";

type Props = { children: ReactNode };
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
