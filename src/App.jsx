import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    let formValue = {
        name:"",
        email:"",
        lastname:"",

    };

    const [value, setValue] = useState( {
        name:"",
        email:"",
        lastname:"",
    });

    return (
        <div> 
            <input
            type="text"
placeholder="firstName"
onChange={(e)}
            <input/>
        </div>
    )

    }
export default App;