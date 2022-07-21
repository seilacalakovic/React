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
        <button className="delete"
        onClick={props.onDelete}>
        
        delete
        </button>
      </div>
    </div>
  );
};



export default Card;

// useEffect - reakcija cele komponente na nesto