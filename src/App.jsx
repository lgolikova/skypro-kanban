import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopUser from './components/popups/PopUser/PopUser'
import PopExit from './components/popups/PopExit/PopExit'
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <>
      <div className="wrapper">
        <GlobalStyles />
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App