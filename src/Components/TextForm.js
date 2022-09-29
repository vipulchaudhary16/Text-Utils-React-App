import React, { useState } from "react";
// rfc

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case", "success");
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case", "success");
  };

  const handleclear = () => {
    setText("");
    props.showAlert("Text Area Has Been cleared", "warning");
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard", "success");
  };

  const hanndleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  function wordCounter(text) {
    let wordNumber = text.split(/\s+/).filter(function (n) {
      return n !== "";
    }).length;
    return wordNumber;
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor:
                props.mode === "dark" ? "hsl(0, 0%, 7%)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handlelowClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={hanndleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success my-2 mx-2"
          onClick={handleclear}
        >
          clear
        </button>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="my-1">Your text summary :</h3>
        <p className="my-1">
          There are <b>{wordCounter(text)}</b> words and {text.length}{" "}
          characters
        </p>
        <p>
          You can read these words in{" "}
          {(0.008 * wordCounter(text)).toPrecision(2)} minutes{" "}
        </p>
        <h2>Preview : </h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text Box to preview here"}
        </p>
      </div>
    </>
  );
}
