import React from 'react'
import './Pokecard.css'

const PokeCard = ({ name, type, id, exp }) => {

    const getImageURL = id => {
        const paddedId = id.toString().padStart(3, 0)

        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
    }

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img className="Pokecard-image" src={getImageURL("4")} />
            <div className="Pokecard-footer">
                <p className="Pokecard-type">Type: {type}</p>
                <p className="Pokecard-exp">EXP: {exp}</p>
            </div>
        </div>
    )
}

export default PokeCard