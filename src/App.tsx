import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

type PokemonData = {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
};

function App() {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        const pokemonData = response.data.results;
        detailsPokemonData(pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const detailsPokemonData = (data: PokemonData[]) => {
    Promise.all(
      data.map((pokemon: PokemonData) => {
        return axios.get(pokemon.url).then((response) => {
          return response.data;
        });
      })
    )
      .then((detailsData) => {
        setPokemonData(detailsData);
        console.log(detailsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">ポケモン図鑑</h1>
      </div>
      {pokemonData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.name}</p>
            <img src={data.sprites.front_default} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default App;
