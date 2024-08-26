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
               setImageUrl(data.sprites.front_shiny);
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
        <div onClick={onClick}>
            {
                loading ? (
                    <p>Wait a Minute</p>
                )
                :
                (
                    <div className="card">
                        <div className="imageDiv">
                            <img className='image' src={imageUrl} alt={pokemon.name}></img>
                        </div>
                        <div className="textDiv">
                            <p className='text'>{pokemon.name}</p>
                        </div>
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