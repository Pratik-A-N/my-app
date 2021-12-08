import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleloclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; //wrong way to change the state
  
    return (
    <> 
    <div className= "container">
    <div className="mb-3">
        <h1>{props.title} </h1>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>  
    <button className="btn btn-primary" onClick={handleUpclick}>Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloclick}>Lowercase</button>
    </div> 

        <div className="container">
        <h1> Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} reading time in minutes</p>

        </div>    
    </>
    )
}
