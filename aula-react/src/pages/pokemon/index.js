import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxLista from '../../components/FlexBoxLista';
import FlexBoxItem from '../../components/FlexBoxItem';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const resposta = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemon(resposta.data);
    }
    pegarDados();
  }, []);

  if (pokemon === null) {
    return <p>Carregando ...</p>;
  }

  return (
    <>
      {/* <h1>Pokemon: {pokemon.results.name}</h1> */}
      <img className="img-pokemon" src={pokemon.sprites.front_default} />

      <FlexBoxLista titulo="Pokemons">
        {pokemon.results.map((item) => (
          <FlexBoxItem key={item.name}>
            {item.name}
            {item.url}
          </FlexBoxItem>
        ))}
      </FlexBoxLista>

      {/* <FlexBoxLista titulo="Movimentos">
        {pokemon.moves.map((item) => (
          <FlexBoxItem key={item.move.name}>{item.move.name}</FlexBoxItem>
        ))}
      </FlexBoxLista> */}
    </>
  );
};

export default Pokemon;
