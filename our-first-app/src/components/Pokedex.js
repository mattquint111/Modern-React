import React from 'react'
import './Pokedex.css'
import PokeCard from './Pokecard'

const Pokedex = props => {

    const pokemonList = props.pokemon

    const renderPokecards = pokemonList.map( mon => {
        return (
            <PokeCard
                key={mon.id}
                name={mon.name}
                id={mon.id}
                type={mon.type}
                exp={mon.base_experience}
            />
        )
    })

    return (
        <div>
            <h1 className="Pokedex-title">Pokedex</h1>
            {renderPokecards}
        </div>
    )
}

export default Pokedex