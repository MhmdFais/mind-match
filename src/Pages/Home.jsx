import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../styles/Home.css';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png

function Home() {
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                const pokenos = data.results;
                setPokemonData(pokenos); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });

        return () => {
            console.log('Cleanup');
        };

    }, []);

    return (
        <div className='contentDiv'>
            <Header />
            {loading ? (
                <p className='loadText'>Wait a Minute</p> 
            ) : (
                <p>Check console for Pokémon data!</p> 
            )}
        </div>
    );
}

export default Home;
