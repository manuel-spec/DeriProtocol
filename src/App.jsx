import BottomNavigationBar from "./components/BottomNavigationBar"
import './App.css'
import Navbar from "./components/HomeComponent/Navbar"
import Header from "./components/HomeComponent/Header"
import Announcment from "./components/HomeComponent/Announcment"
import CoinGraph from "./components/HomeComponent/CoinGraph"
import Options from "./components/HomeComponent/Options"
import FastTrading from "./components/HomeComponent/FastTrading"
import StickyHeadTable from "./components/HomeComponent/Table"

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <Announcment />
        <BottomNavigationBar />
        <CoinGraph />
        <Options />
        <FastTrading />
        <StickyHeadTable />
    </div>
    
  )
}

export default App
