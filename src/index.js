import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";

function App() {
  return (
    <div className="App">
      <h3>Challenge 1</h3>
    </div>
  );
}

const FontLink = () => {
  return (
    <div className="card">
      <span className="font-link">
        This is with Font Link. We are linking the fonts from the Google Fonts.
      </span>
    </div>
  );
};

export default FontLink;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
