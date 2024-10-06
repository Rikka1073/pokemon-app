import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        const pokemonData = response.data.results;
        detailsPokemonData(pokemonData);
      })
      .catch(() => {
        console.log("Error");
      });
  });

  const detailsPokemonData = (data) => {
    data.map((pokemon) => {
      axios.get(pokemon.url).then((response) => {
        return console.log(response.data);
      });
    });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">ポケモン図鑑</h1>
      </div>
    </>
  );
}

export default App;
