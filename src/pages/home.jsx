import React from 'react'
import Search from '../components/Search'
import { fetchPokemon } from "../services/getPokemon";
import PokemonData from "../components/PokemonData";

export default function HomePage() {

    const [ pokemon, setPokemon ] = React.useState()
    const [ loading, setLoading ] = React.useState(false)

    const getPokemon = async (query) => {
        const response = await fetchPokemon(query)
        const data = await response.json()
        setPokemon(data)
        setLoading(false)
        console.log(data)
    }
    return (
        <div>
            <Search getPokemon={getPokemon} />
            {!loading && pokemon ? (
                <div>
                    <PokemonData
                        name={pokemon.name}
                        sprite={pokemon.sprites.front_default}
                        abilities={pokemon.abilities}
                        stats={pokemon.stats}
                        types={pokemon.types}
                    />
                </div>
            ): null}
        </div>
    )
}