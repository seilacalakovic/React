import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
    const [data, setData] = useState([]);

   let a = ""; 
    return (
        <div className="container">
            <h1> TO DO LIST</h1>
         <div> className="unos">
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
            {data}
            
        <button>
            className="check"
            onClick={}
        </button>
            )
}