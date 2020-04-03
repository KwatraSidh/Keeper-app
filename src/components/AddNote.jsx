import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function AddNote(props)
{   const[item,setItem]= useState(
    {
        title:"",
        content:""
    }
)
const [isExpanded,setExpanded] = useState(false);

function handleChange(event)
{
    const{name,value} = event.target;
    setItem(prevValue => {
        return {
            ...prevValue,
            [name]:value
        }
    })  
}
function animateNote()
{
    setExpanded(true);
}

function submitNote(event)
{
    props.onCheck(item);
    event.preventDefault();
}
      

  return (
        <form className="create-note">
        {isExpanded && <input type="text" placeholder="Title" name="title" onChange={handleChange} value={item.title}/>}    
            <textarea placeholder="Take a note..." onClick={animateNote} rows={isExpanded?"3":"1"} name="content" onChange={handleChange} value={item.content}></textarea>
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>    
        </form>
    )
}