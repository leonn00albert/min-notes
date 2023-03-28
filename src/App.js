import { Editor } from "./Components/Editor";
import './App.css';
import { Home } from "./Components/Home";
import { useEffect, useState } from "react";


function App() {
  const [show, setShow] = useState({ type: "home" });

  const handleShow = () => {
    console.log(show.type)
    if (show.type = 'home') {
      setShow(
        { type: "editor" }
      )
    }
    if (show.type = 'editor') {
      setShow(
        { type: "home" }
      )
    }


  }

  useEffect(()=> {},[show])

  function render() {
    if (show.type = 'home') {
      return <Home handleShow={handleShow} />;
    }

    if (show.type = 'editor') {
      return <Editor handleShow={handleShow} />;
    }
  }




  return (
    <div className="App">
      <header className="App-header">

      </header>

      {render()}

    </div>
  );
}

export default App;
