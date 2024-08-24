import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../styles/Home.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPokemonData(data); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
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
