import { useState } from "react";
import "./App.css";

const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'Elon Musk', lang: 'en'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });



export default App;

// import { useState } from "react";
// import "./App.css";
// import Cart from "./components/Cart";

// const App = () => {
//   const [isShown, setIsShown] = useState(false);
//   const [data, setData] = useState([
//     { name: "Daris", price: 10 },
//     { name: "Nesto", price: 13 },
//     { name: "ASDADS", price: 19 },
//     { name: "CCCC", price: 22 },
//   ]);

//   let nameValue = "";
//   let priceValue = "";

//   return (
//     <div>
//       <h1>Home pAGE nest</h1>
//       <Cart articles={data} />
//       <button
//         onClick={() => {
//           setIsShown(!isShown);
//         }}
//       >
//         Toggle state
//       </button>
//       <h1>STATE:{String(isShown)}</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           setData([...data, { name: nameValue, price: priceValue }]);
//           console.log(data);
//         }}
//       >
//         <input
//           type="text"
//           placeholder="name"
//           onChange={(e) => {
//             nameValue = e.target.value;
//           }}
//         />
//         <input
//           type="number"
//           placeholder="price"
//           onChange={(e) => {
//             priceValue = Number(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import { memo, useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log("app rerender");
  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const Todos = memo(({ todos, addTodo }) => {
  console.log("todo render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

export default App;