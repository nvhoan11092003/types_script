import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
const UserLayOut = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default UserLayOut;
