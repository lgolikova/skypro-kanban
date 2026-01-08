import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import { SWrapper } from "./components/Wrapper.styled";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/TaskProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <SWrapper>
                    <GlobalStyles />
                    <AppRoutes />
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </SWrapper>
            </TaskProvider>
        </AuthProvider>
    );
}

export default App;
