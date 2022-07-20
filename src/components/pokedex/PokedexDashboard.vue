<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <pokemon-card v-if="this.listPokemon.length > 0" :list="listPokemon" :listOwned="listPokemonOwned"/>
                <div v-else class="d-flex flex-row">
                    <v-skeleton-loader
                        class="ml-8 mr-6"
                        width="200"
                        height="200"
                        type="card"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        class="mr-6"
                        width="200"
                        height="200"
                        type="card"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        class="mr-6"
                        width="200"
                        height="200"
                        type="card"
                    ></v-skeleton-loader>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import PokemonCard from "@/components/pokedex/PokemonCard";

export default {
    name: "PokedexDashboard",
    components: {
        PokemonCard
    },
    data(){
        return {
            listPokemon: [],
            listPokemonOwned: [],
            limitPokemon: 30
        }
    },
    mounted(){
        this.getPokemonsList()
    },
    methods:{
        async getPokemonsList(){
            let pokeList = []
            let pokeListOwned = []

            for(let i = 1; i <= this.limitPokemon; i++){
                await axios.get('https://pokeapi.co/api/v2/pokemon/'+ i +'/')
                .then((response) => {
                    pokeList.push(response.data)
                })
            }

            await axios.get('http://localhost:8000/pokemon/2')
            .then((responseOwned) => {
                let tempPokeListOwned = []
                tempPokeListOwned.push(responseOwned.data)

                for(let x = 0; x < tempPokeListOwned[0].length; x++){
                    pokeListOwned.push(tempPokeListOwned[0][x].id)
                }
            })

            this.listPokemonOwned = pokeListOwned
            this.listPokemon = pokeList
        }
    }
}
</script>

<style scoped>
</style>