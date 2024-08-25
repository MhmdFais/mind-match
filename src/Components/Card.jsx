import PropTypes from 'prop-types';
import '../styles/Card.css';
import { useState, useEffect } from 'react';

function Card({pokemon, onClick}){

    //const pokemonIndex = pokemon.url.split('/').pop();
    //https://pokeapi.co/api/v2/pokemon/{pokemon.name}

    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const fetchPokeMonImage = async () => {
            try{
               const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
               const data = await response.json();
               setImageUrl(data.sprites.front_default);
               setLoading(false)
            }
            catch(error){
                console.log('Image fetching failed', error)
                setLoading(false)
            }
        }

        fetchPokeMonImage();

        return () => {
            console.log('Component unmounted');
        };
    },[pokemon.name])

    return(
        <div className="card" onClick={onClick}>
            {
                loading ? (
                    <p>Wait a Minute</p>
                )
                :
                (
                    <div className='card'>
                        <p>{pokemon.name}</p>
                        <img src={imageUrl} alt={pokemon.name}></img>
                    </div>
                )
            }
        </div>
    )
}

Card.propTypes = {
    pokemon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card;