import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Display from './components/Display.js'

function App() {

  const [state, setState] = useState()
  console.log(state)
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=TRAEbLtsLgsKUu0evUgunnsvoHOSAJLELsOakYHO&date=2019-07-10`)
    .then(res => setState(res.data))
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <Display state={state}/>
    </div>
  );
}

export default App;
