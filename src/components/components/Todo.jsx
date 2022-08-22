import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((el, index) => index !== action.payload);
    default:
      return state;
  }
};

const Todo = () => {

  const [data, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <Link to={"/"}>HOME</Link>
      <form
        className="unos"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", payload: input });
          setInput("");
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button type="submit">Submit</button>
      </form>
      {data.map((el, i) => {
        return (
          <Card
            title={el}
            onDelete={() => {
              dispatch({ type: "DELETE", payload: i });
            }}
          />
        );
      })}
    </div>
  );
};

export default Todo;