import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Menubar from "../Pages/Shared/Menubar/Menubar";


const Main = () => {
    return (
        <div>
            <Menubar/>
            <Outlet></Outlet>
            <Footer/>
          
        </div>
    );
};

export default Main;