import './App.css';
import GlobalStyles from "./components/GlobalStyles";
import { SWrapper } from './components/Wrapper.styled';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
        <SWrapper>
            <GlobalStyles />
            <AppRoutes />
        </SWrapper>
    </>
  )
}

export default App;