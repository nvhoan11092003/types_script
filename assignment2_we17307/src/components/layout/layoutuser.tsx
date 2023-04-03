
import { Outlet } from "react-router-dom"

const Layoutuser = () => {
        return <div className="container mx-auto">
                <header className="bg-red-500">header</header>
                <Outlet />
                <footer>footer</footer>
        </div>
};

export default Layoutuser;
