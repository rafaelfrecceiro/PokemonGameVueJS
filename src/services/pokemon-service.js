import axios from "axios";
import { handleResponse } from '@/utils/promise-helpers'


export default {
    getPokemonById(pokemonId){
        return axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/')
    }
}