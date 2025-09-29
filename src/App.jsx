import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopUser from './components/popups/PopUser/PopUser'
import PopExit from './components/popups/PopExit/PopExit'

function App() {
  return (
    <>
      <div className="wrapper">
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