import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';

import { smallPokemon } from '../../interfaces/pokemon-list';
import { useRouter } from 'next/router';

interface props {
    pokemon: smallPokemon
}

export const PokemonCard: FC<props> = ( { pokemon } ) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${ pokemon.name }`)
    }


  return (
    
    <Grid xs={ 6 } sm= { 3 } md={ 2 } xl={ 1 }>
        <Card 
            isHoverable 
            isPressable
            onClick={() => onClick()}
        >
            <Card.Body css={{p:1}}>
                <Card.Image
                src={ pokemon.img }
                width='100%'
                height={ 140 }
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{ pokemon.name }</Text>
                <Text>#{ pokemon.id }</Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>

  )
}
