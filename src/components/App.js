import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote"
import Note from "./Note";
import notes from "../notes"



function App() {
  const [list,setList]= useState(notes);

  function addItem(itemRecieved)
  { 
    setList(prevValue=>{
      return [itemRecieved,...prevValue]
    })
  }

function noteDelete(idRecieved)
{
  setList(prevValue=>{
    return prevValue.filter((list,idDelete)=>{return idDelete!==idRecieved})
    
  })
}

  return (
    <div>
      <Header />
      <AddNote onCheck={addItem}/>
      {list.map((notes,index)=>{
        return <Note key={index} id={index} title={notes.title} content={notes.content} onDelete={noteDelete}/>
      }
        )}
      <Footer />
    </div>
  );
}

export default App;
