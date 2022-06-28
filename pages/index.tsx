import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/Layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, smallPokemon } from '../interfaces'
import { Grid } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: smallPokemon[]
}

const Home: NextPage<Props> = ( { pokemons } ) => {

  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
        </Grid.Container>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: smallPokemon[] = data.results.map( (poke,i) =>({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default Home
