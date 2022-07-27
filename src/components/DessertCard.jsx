import { useEffect, useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard";

const App = () => {
  const [desserts, setDesserts] = useState([]);
  let inputValue = "";
  const getDesserts = async (size) => {
    const res = await fetch(
      `https://random-data-api.com/api/dessert/random_dessert?size=${size}`
    );
    const data = await res.json();
    setDesserts(data);
    console.log(data);
  };

  useEffect(() => {
    getDesserts(100);
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          inputValue = Number(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getDesserts(inputValue);
        }}
      >
        Submit
      </button>
      {desserts.map((dessert) => {
        return <DessertCard des={dessert} key={dessert.uid} />;
      })}
    </div>
  );
};

export default App;