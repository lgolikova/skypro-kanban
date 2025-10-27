import PopUser from "../components/popups/PopUser/PopUser";
import { useNavigate } from "react-router-dom";

function ExitPage({ setIsAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
    };

    return <PopUser onLogout={handleLogout}/>;
}

export default ExitPage;