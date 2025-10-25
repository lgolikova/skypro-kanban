import { Outlet } from "react-router-dom";
import Main from '../components/Main/Main';
import Header from "../components/Header/Header";

function MainPage({ isDarkTheme, onLogout }) {
    return (
        <>
            <Header isDarkTheme={isDarkTheme}  onLogout={onLogout}/>
            <Main />
            <Outlet />
        </>
        );
    }

export default MainPage;