import axios from "axios";
import "./App.css";

function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      console.log(response.data);
    })
    .catch(() => {
      console.log("Error");
    });
  return <></>;
}

export default App;
