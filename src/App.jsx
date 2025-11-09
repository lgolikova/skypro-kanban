import './App.css';
import GlobalStyles from "./components/GlobalStyles";
import { SWrapper } from './components/Wrapper.styled';
import AppRoutes from './AppRoutes';
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <SWrapper>
            <GlobalStyles />
            <AppRoutes />
        </SWrapper>
      </AuthProvider>
    </>
  )
}

export default App;