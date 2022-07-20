import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
const App = () => {
  const [data, setData] = useState([]);

  let a = "";
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="unos">
        <input
          type="text"
          onChange={(e) => {
            a = e.target.value;
          }}
        />
        <button
          onClick={() => {
            setData([...data, a]);
          }}
        >
          Submit
        </button>
      </div>
      {data.map((el) => {
        return <Card title={el} />;
      })}
    </div>
  );
};

export default App;