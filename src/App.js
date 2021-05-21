import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomePage from "./pages/home";
import Tabs from "./components/Tabs"
import Dashboard from "./components/Dashboard";
// import PokemonList from './PokemonList'

function App() {
  const [ allPokemon, setAllPokemon ] = useState([]);
  const [ wildPokemon, setWildPokemon ] = useState({});
  const [ showModal, setShowModal ] = useState(false)

  const openModal = () => {
    setShowModal(prevState => !prevState)
  }

  useEffect(() => {
    encounterWildPokemon()
  }, [])

  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(151)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const encounterWildPokemon = () => {
    axios
        .get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then(response => {
          console.log(response.data)
          setWildPokemon(response.data)
        })
  }

  const catchPokemon = (pokemon) => {
    setAllPokemon(state => {
      const pokemonExists = (state.filter(p => pokemon.id === p.id).length > 0);
      // checking to see if pokemon exists at all
      if(!pokemonExists) {
        state = [...state, pokemon]
        state.sort(function (a, b) {
          return a.id - b.id;
          // returning pokemon in correct order instead of random
        })
      }
      return state;
    })
    encounterWildPokemon();
  }

  const releasePokemon = (id) => {
    setAllPokemon(state => state.filter(p => p.id !== id))
  }

  const favoritePokemon = (id) => {

  }

  const viewPokemonStats = (id) => {

  }

  const searchPokedex = (id) => {

  }

  return (
      <Tabs>
        <div label="REGISTER">
          <Dashboard />
        </div>

        <div label="CATCH">
          <div className="app-wrapper">
            <header>
              <h1 className="title">POKEWREX</h1>
              <h3 className="subtitle">Fight with React!</h3>
            </header>
            <section className="wild-pokemon">
              <h2>Wild Encounter</h2>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildPokemon.id + ".png"} className="sprite" />
              <h3>{wildPokemon.name}</h3>
              <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>CATCH!</button>
            </section>
            <section className="pokedex">
              <h2>My Pokedex</h2>
              <div className="pokedex-list">
                {allPokemon.map(pokemon => (
                    <div className="pokemon" key={pokemon.id}>
                      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} className="sprite" />
                      <h3 className="pokemon-name">{pokemon.name}</h3>
                      <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
                      <button className="favorite" onClick={() => favoritePokemon(pokemon.id)}>&hearts;</button>
                      <button className="stats" onClick={() => viewPokemonStats(pokemon.id)}>View Stats</button>
                    </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div label="SEARCH">
          <HomePage />
        </div>
      </Tabs>
  );
}

export default App;
