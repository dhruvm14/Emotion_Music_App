import "./App.css";
import Player from "./Player";
import Body from "./Body";
import Topbar from "./Topbar"
import {useState} from "react"

function App() {
  const [dark,setDark] = useState(true);
  const [mood, setMood] = useState(null);
  function changeMode()
  {
    setDark(prev=>!prev);
  }
  return <div className="App">
    <Topbar changeMode={changeMode} dark={dark} mood={mood}/>
    <Body dark={dark} mood={mood}/>
    <Player dark={dark} mood={mood} setMood={setMood}/>
  </div>;
}

export default App;
