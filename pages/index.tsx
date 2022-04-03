import React from 'react';
import { Title, Container } from '@mantine/core';
// eslint-disable-next-line import/extensions
import { PokemonList } from '../components/PokemonList/PokemonList';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import useStyles from '../components/Pokemon/Pokemon.styles';

export default function HomePage() {
    const { classes } = useStyles();
    return (
        <>
            <Container>
                <Title className={classes.title}>National Pokedex</Title>
                <ColorSchemeToggle />
                <PokemonList />
            </Container>
        </>
    );
}
