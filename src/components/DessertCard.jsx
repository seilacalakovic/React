import { useEffect, useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard";

const App = () => {
    const [dessert, setDessert] = useState ([]);

    const getDessert = async () => {
        const res = await fetch(
            "https://random-data-api.com/api/dessert/random_dessert?size=100"
        );
        const data = await res.json();
        setDessert(data)
        console.log(data);
    }
}

useEffect (() => {
    getDessert();
    
}
)

<input 
onClick={() => {
    dessert(searchValue);
  }}
>
  Submit
  </input>
