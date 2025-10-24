import { Outlet } from "react-router-dom";
import Main from '../components/Main/Main';
import Header from "../components/Header/Header";
import PopNewCard from '../components/popups/PopNewCard/PopNewCard'

function MainPage() {
    return (
        <>

            <Header />
            <Main />
            <Outlet />
        </>
        );
    }

export default MainPage;