import Head from 'next/head'

import styles from './pokemon.module.css'

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.container}>
        Welcome, {pokemon?.name}!
        <img src={pokemon?.sprites.front_default} alt='pokemon' />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemonList = await response.json()

  let paths = pokemonList.results.map((p) => `/pokemon/${p?.name}`)

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { pokemon } }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const pokemonData = await response.json()

  return {
    props: {
      pokemon: pokemonData,
    },
  }
}

export default Pokemon
