import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
                // always use a key with a loop in React
            ))}
        </div>
    )
}