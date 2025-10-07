import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar.jsx";

const AppLayout = () => {

    return (
        <>
            <NavBar color='dark' dark='true' fixed='top'/>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default AppLayout;