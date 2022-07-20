import { useState } from "react";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`card ${isChecked ? "checked" : ""}`}>
      <p>{props.title}</p>
      <div>
        <button
          className="check"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          CEKIRAJ
        </button>
        <button className="delete">delete</button>
      </div>
    </div>
  );
};

export default Card;