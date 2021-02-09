import "./App.css";
import Player from "./Player";
import Body from "./Body";
import Topbar from "./Topbar"
import {useState} from "react"

function App() {
  const [dark,setDark] = useState(false);
  function changeMode()
  {
    setDark(prev=>!prev);
  }
  return <div className="App">
    <Topbar changeMode={changeMode} dark={dark}/>
    <Body/>
    <Player/>
  </div>;
}

export default App;
