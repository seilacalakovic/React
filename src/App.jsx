import { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      case "decrement":
        return action.data;
        default:
          return state;
  }
}

const App = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  
  function increment() {
    dispatch({ type: "increment", data: conut + 1});
  }

  function decrement() {
    dispatch({ type: "decrement", data: count - 1});
  }

  return (
    <div> 
      <button onClick={decrement}> - </button>
      <p> {count} </p>
      <button onClick={increment}></button>
    </div>
  )
};

export default App;