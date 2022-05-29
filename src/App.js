import { useEffect, useState } from 'react';

function App() {
  
  const [allPokemons, setAllPokemons] = useState([])
  const [LoadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  
  const getAllPokemons = async () => {
    const res = await fetch(LoadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.name}')
      })
    }
    createPokemonObject(data.result)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])
  


  return (
    <div className="app-container">
      <h1>Poke evolution</h1>
      <div className ='pokemon-container'>
        <div className='all-container'>

        </div>
        <button className='load-more'>Load More</button>
      </div>
    </div>
  );
}

export default App;
