// import { SET_INFO_AGENT } from '@/store/mutation-types'
import PokemonService from "@/services/pokemon-service";

const actions = {
    getPokemonById({ dispatch }, pokemonId) {
        return new Promise(resolve => {
            PokemonService.getPokemonById(pokemonId).then(response => {
                resolve(response.data)
            })
        })
    }
}

export default actions