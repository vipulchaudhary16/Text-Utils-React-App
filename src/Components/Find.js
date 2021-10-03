import React, { useState } from "react"
// rfc

export default function TextForm(props) {
    let myStyle ={
        color:props.mode === 'dark'?'white':'hsl(0, 0%, 7%)',
        backgroundColor:props.mode === 'dark'?'hsl(0, 0%, 7%)':'white',
    }
    let boxStyle={
        color:props.mode === 'dark'?'white':'hsl(0, 0%, 7%)',
        backgroundColor:props.mode === 'dark'?'hsl(0, 0%, 7%)':'white',
        border:'1px solid',
        borderColor : props.mode === 'dark'?'white':'#948b73'
    }

    const [findText, setfindText] = useState("");
    const [replceText, setReplceText] = useState("");
    const [mainText, setmainText] = useState("");

    const handleOnfind = (event)=>{
        console.log("Trying to change");
        setfindText(event.target.value);
    }

    const handleOnReplace = (event)=>{
        console.log("Trying to change");
        setReplceText(event.target.value);
    }

    const handleOnChange = (event)=>{
        console.log("Trying to change");
        setmainText(event.target.value);
    }

    const handleUpClick = ()=>{
        console.log("replace was clicked");
        var tempText = mainText;
        var newText;
        while (tempText.includes(findText)) {
            newText = tempText.replace(findText , replceText)
            tempText = newText
        }
        setmainText(newText);
    }

    return (

        <div style={myStyle}>
            <h4 className="my-1">Enter the paragraph here : </h4>
            <div className="mb-3 my-2" >
                <textarea className="form-control" value={mainText} onChange={handleOnChange} id="myBox" rows="4" style={boxStyle}></textarea>
            </div>

            <h4 className="my-1">Find this</h4>
            <div className="mb-3">
                <textarea className="form-control" value={findText} onChange={handleOnfind} id="myBox" rows="1" style={boxStyle}></textarea>
            </div>

            <h4 className="my-1">And replace with</h4>
            <div className="mb-3">
                <textarea className="form-control" value={replceText} onChange={handleOnReplace} id="myBox" rows="1"style={boxStyle}></textarea>
            </div>

            <button disabled={mainText.length ===0 && findText.length ===0 && replceText.length ===0   } className="btn btn-primary" onClick={handleUpClick}>
                Replace
            </button>
        </div>

    )
}
