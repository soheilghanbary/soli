import { FC, ReactNode } from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 xl:mt-10 lg:mt-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
