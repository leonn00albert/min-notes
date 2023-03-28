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
  const [notes, setNotes] = useState([]);
  const handleShow = () => {
    
    console.log(show.type)
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

  const createNote = (filename, title,content)=>{

    localStorage.setItem("note_" + filename, JSON.stringify(new Note(title, content))) 
  }

  localStorage.setItem('note_',JSON.stringify(example));
  useEffect(()=> {},[show])

  function render() {
    if (show.type === 'home') {
      return <Home notes={notes} handleShow={handleShow} />;
    }

    if (show.type === 'editor') {
      return <Editor  createNote={createNote} handleShow={handleShow} />;
    }
  }

useEffect(()=>{
setNotes(Object.values(localStorage).map(note => JSON.parse(note)))} ,[])


  return (
    <div className="App">
      <header className="App-header">

      </header>

      {render()}

    </div>
  );
}

export default App;
