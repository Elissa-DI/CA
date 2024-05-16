import { FC } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type AppLayout = {
  children: React.ReactNode;
};

const AppLayout: FC<AppLayout> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
