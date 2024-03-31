import BottomNavigationBar from "./components/BottomNavigationBar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
      <BottomNavigationBar />
    </div>
  );
}

export default App;
