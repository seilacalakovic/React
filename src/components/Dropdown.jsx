import { useState } from "react";
import "./App.css";

const Dropdown = () => {
  const [selected, setSelected] = useState("");
  const [isShown, setIsShown] = useState(false);

  const checkSelected = () => {
    if (!selected) {
      return <h1>Checkirajte nesto</h1>;
    }
    if (selected === "Home") {
      return (
        <div>
          <h1>Home</h1>
          <p>
            Ovo je home sekcija i ovde pise nesto o home i samom projektu nesto
            nesto
          </p>
        </div>
      );
    }
    if (selected === "Contact") {
      return (
        <form>
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
        </form>
      );
    }
    if (selected === "About") {
      return (
        <div>
          <h1>About o name klikni link za vise</h1>
          <a href="#">Link</a>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="nav">
        <h1
          onClick={() => {
            console.log("Home");
            setSelected("Home");
          }}
        >
          Home
        </h1>
        <h1
          onClick={() => {
            console.log("Contact");
            setSelected("Contact");
          }}
        >
          Contact
        </h1>
        <h1
          onClick={() => {
            console.log("Avbout");
            setSelected("About");
          }}
        >
          About
        </h1>
        <div
          className="dropdown"
          onClick={() => {
            console.log("Dropwdown");
            setIsShown(!isShown);
          }}
        >
          BUTTON ZA DROPDOWN
        </div>
      </div>
      {isShown && <div className="content">{checkSelected()}</div>}
    </div>
  );
};

export default Dropdown;