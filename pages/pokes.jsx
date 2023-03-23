import React, { useEffect } from "react";
import Pokemons from "../entities/Pokemons";
export default function Pokes() {
    const PokemonList = Pokemons.fetch();

    useEffect(() => {
        console.log(PokemonList.data?.data?.results);
    }, [PokemonList]);

    return <>{PokemonList.isLoading ? <h1>loading</h1> : PokemonList.data?.data.results.map((poke) => <div key={poke.url}>{poke.name}</div>)}</>;
}
