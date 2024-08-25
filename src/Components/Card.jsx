import PropTypes from 'prop-types';

function Card({pokemon, onClick}){
    return(
        <div>
            <p>{pokemon.name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').pop()}.png`}></img>
        </div>
    )
}

Card.propTypes = {
    pokemon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Card;