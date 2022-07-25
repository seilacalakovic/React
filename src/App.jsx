import { useEffect, useState } from "react";
import "./App.css";

const GithubCard = () => {
  const [users, setUsers] = useState([]);
  let searchValue = "";

  const getGithubData = (user) => {
    fetch(`"https://random-data-api.com/api/dessert/random_dessert?size=100"`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers([...users, data]);
      });
  };

  useEffect(() => {
    getGithubData();
  }, []);


}