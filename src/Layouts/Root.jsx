import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
    return (
      <div>
        <div className="h-20">
          <Nav></Nav>
        </div>
        <div className="min-h-[calc(100vh-135px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;