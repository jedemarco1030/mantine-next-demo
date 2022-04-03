import React from 'react';
import { Text, Image } from '@mantine/core';
import useFetchPokemon from '../../utils/useRequest';

// @ts-ignore
export function Pokemon({ pokemon }) {
  const { name } = pokemon;
  const { result, error } = useFetchPokemon(name);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <>
      <td>
        <Text>#{result.id}</Text>
      </td>
      <td>
        <Image src={result.sprites.front_default} alt={name} width={64} />
      </td>
      <td>
        <Text transform="capitalize">{name}</Text>
      </td>
      <td>
        <Text transform="capitalize">
          {result.types.map((poke: { type: { name: any } }) => poke.type.name).join(', ')}
        </Text>
      </td>
    </>
  );
}
