import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../styles/Home.css';
import Card from '../Components/Card'
import Footer from '../Components/Footer';

// const pokenos = data.results.map((pokemon, index) => ({
//     name: pokemon.name,
//     id: index + 1,
//     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
// }));

function Home() {
    const [pokemonData, setPokemonData] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then(response => response.json())
            .then(data => {
                const pokemons = data.results;
                setPokemonData(pokemons);
                console.log('data got !!!!');
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    const handlePokemonClick = (pokemon) => {
        if (selectedPokemon.includes(pokemon.name)){
            if (score > highScore){
                setHighScore(score)
            }
            setSelectedPokemon([])
            setScore(0)
        }
        else{
            setSelectedPokemon([...selectedPokemon, pokemon.name])
            setScore(score+1)
        }
    };

    const getTenRandomCards = () => {
        const shuffledArray = [...pokemonData].sort(() => 0.5 - Math.random())
        console.log('got random pokemon')
        return shuffledArray.slice(0, 10)
    }

    return (
        <div className='contentDiv'>
            <Header highScore={highScore} score={score}/>
            <div className="cardGrid">
                {getTenRandomCards().map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} onClick={() => handlePokemonClick(pokemon)} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
