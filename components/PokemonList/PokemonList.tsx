import React, { Key } from 'react';
import { Table } from '@mantine/core';
// eslint-disable-next-line import/extensions
import { Pokemon } from '../Pokemon/Pokemon';
import useFetchPokemon from '../../utils/useRequest';

export function PokemonList() {
  const { result, error } = useFetchPokemon();

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <>
      <Table verticalSpacing="xs">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Image</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {result.results.map((pokemon: { name: Key | null | undefined }) => (
            <tr>
              <Pokemon pokemon={pokemon} key={pokemon.name} />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
