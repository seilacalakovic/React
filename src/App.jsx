import { Route, Routes } from "react-router-dom";
import Counter from "./components/components/Counter";
import Dropdown from "./components/components/Dropdown";
import Todo from "./components/components/Todo";

import "./App.css"

const App = () => {
  return (
    <div>
    <Routes>
      <Route path={"/counter"} element={<Counter/>} />
      <Route path={"/dropdown"} element={<Dropdown/>} />
      <Route path={"/list"} element={<Todo/>} />
      <Route path={"/"} element={<h1>Welcome</h1>} />
    </Routes>
    <div> 
      <link to={"/"}>
        <h1>Welcome</h1>
      </link>
      <link to={"/counter"}>
        <h1>Counter</h1>
      </link>
      <link to={"/dropdown"}>
        <h1>Dropdown</h1>
      </link>
      <link to={"/list"}>
        <h1>List</h1>
      </link>
    </div>
    </div>
  )
}