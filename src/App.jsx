import './App.css';
import GlobalStyles from "./components/GlobalStyles";
import { SWrapper } from './components/Wrapper.styled';
import AppRoutes from './AppRoutes';
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/TaskProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <SWrapper>
              <GlobalStyles />
              <AppRoutes />
          </SWrapper>
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App;