import { useState } from "react";

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  const isSelected = color === selectedColor;

  const style = {
    backgroundColor: color,
    border: isSelected ? "50px solid white" : "none",
    boxSizing: "border-box",
  };

  return (
    <div
      onClick={handleClick}
      className={`color ${isSelected ? "selected" : ""}`}
      style={style}></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const navbarStyle = {
    backgroundColor: selectedColor,
  };
  return (
    <div id="container">
      <div
        id="navbar"
        style={{ backgroundColor: selectedColor }}>
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
