import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    let myText = document.getElementById("text-input");
    let result = document.getElementById("result");
    let limit = 30;
    result.textContent = 0 + "/" + limit;

    myText.addEventListener("input", function () {
      let textLength = myText.value.length;
      result.textContent = textLength + "/" + limit;

      if (textLength > limit) {
        myText.style.borderColor = "red";
        result.style.color = "red";
      } else {
        myText.style.borderColor = "green";
        result.style.color = "green";
      }
    });
  }, []);

  return (
    <div className="section">
      <h1 className="title">Simple Max Text Input</h1>
      <div className="container  glass ">
        <textarea
          id="text-input"
          rows="6"
          placeholder="Write something here...."
        ></textarea>
        <p id="result"></p>
      </div>
    </div>
  );
}

export default App;
