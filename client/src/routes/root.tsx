import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
