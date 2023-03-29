import { Editor } from "./Components/Editor";
import './App.css';
import { Home } from "./Components/Home";
import { useEffect, useState } from "react";
import Note from "./Util/Note";

const example = {
  date: new Date(),
  title: "New Note",
  content: "Design and development Add  Domain Add Product Add Payment methods ADD logDomain Add Pr"
}

function App() {
  const [show, setShow] = useState({ type: "home" });
  const handleShow = () => {
    if (show.type === 'home') {
      setShow(
        { type: "editor" }
      )
    }
    if (show.type === 'editor') {
      setShow(
        { type: "home" }
      )
    }
  }

  const createNote = (title,content)=>{ 
    let id = Object.values(localStorage).length;
    localStorage.setItem("note_" + id, JSON.stringify(new Note(title, content, "note_" + id))) 
  }




  function render() {
    if (show.type === 'home') {
      return <Home handleShow={handleShow} />;
    }

    if (show.type === 'editor') {
      return <Editor  createNote={createNote} handleShow={handleShow} />;
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
