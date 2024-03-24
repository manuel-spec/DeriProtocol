import BottomNavigationBar from "./components/BottomNavigationBar"
import './App.css'
import Navbar from "./components/HomeComponent/Navbar"
import Header from "./components/HomeComponent/Header"
import Announcment from "./components/HomeComponent/Announcment"
import CoinGraph from "./components/HomeComponent/CoinGraph"

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Announcment />
        <BottomNavigationBar />
        <CoinGraph />
    </div>
    
  )
}

export default App
