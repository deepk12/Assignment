// PokemonComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResults = response.data.results;

        // Fetch additional details for each Pokemon
        const pokemonDetails = await Promise.all(
          pokemonResults.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon Data</h1>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <h2>Name: {pokemon.name}</h2>
          <h2>URL: {pokemon.url}</h2>
          <h2>Abilities:</h2>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}: {ability.ability.url}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PokemonComponent;
