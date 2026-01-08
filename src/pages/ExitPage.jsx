import PopUser from "../components/popups/PopUser/PopUser";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ExitPage() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return <PopUser onLogout={handleLogout} />;
}

export default ExitPage;
