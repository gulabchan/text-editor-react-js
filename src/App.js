import React, { useState } from "react";

function TextEditor() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Text Editor</h2>
      <textarea value={text} onChange={handleTextChange} />
      <div>
        <button onClick={() => setText("")}>Clear</button>
      </div>
      <div>
        <p>Preview:</p>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default TextEditor;
