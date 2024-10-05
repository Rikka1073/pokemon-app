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
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">ポケモン図鑑</h1>
      </div>
    </>
  );
}

export default App;
