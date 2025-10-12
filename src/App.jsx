import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopExit from './components/popups/PopExit/PopExit'
import GlobalStyles from "./components/GlobalStyles";
import { SWrapper } from './components/Wrapper.styled'

function App() {
  return (
    <>
      <SWrapper>
        <GlobalStyles />
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </SWrapper>
    </>
  )
}

export default App