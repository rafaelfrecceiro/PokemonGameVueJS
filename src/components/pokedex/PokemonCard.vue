<template>
    <div class="d-flex flex-row justify-center flex-wrap ma-0 pa-0">
        <div
            v-for="(pokemon, index) in list"
            :key="index"
            class="pa-3"
        >
            <v-card
                elevation="3"
                width="200"
                height="200"
                @click="teste(pokemon)"
                class="flip-card"
            >
                <v-card-text v-if="pokemon.id != pokemonDetail" class="inner">
                    <b> #{{pokemon.id}} - {{capitalize(pokemon.forms[0].name)}}</b>
                    <div
                        :class="{'silhouette': !isCatched(pokemon)}"
                    >
                        <v-img :src="pokemon.sprites.front_default"/>
                    </div>
                </v-card-text>
                <v-card-text v-else class="back">
                    <b>{{capitalize(pokemon.forms[0].name)}}</b>
                    <v-container>
                        <v-row class="text-center ma-0 pa-0">
                            <v-col cols="8" class="text-left body-1 pa-0 ma-0">
                                <b>ID</b>
                            </v-col>
                            <v-col cols="4" class="body-1 pa-0 ma-0">
                                {{pokemon.id}}
                            </v-col>
                        </v-row>
                        <v-row class="text-center ma-0 pa-0">
                            <v-col cols="8" class="text-left body-1 pa-0 ma-0">
                                <b>Ataque</b>
                            </v-col>
                            <v-col cols="4" class="body-1 pa-0 ma-0">
                                {{pokemon.stats[1].base_stat}}
                            </v-col>
                        </v-row>
                        <v-row class="text-center ma-0 pa-0">
                            <v-col cols="8" class="text-left body-1 pa-0 ma-0">
                                <b>Defesa</b>
                            </v-col>
                            <v-col cols="4" class="body-1 pa-0 ma-0">
                                {{pokemon.stats[2].base_stat}}
                            </v-col>
                        </v-row>
                        <v-row class="text-center ma-0 pa-0">
                            <v-col cols="8" class="text-left body-1 pa-0 ma-0">
                                <b>HP</b>
                            </v-col>
                            <v-col cols="4" class="body-1 pa-0 ma-0">
                                {{pokemon.stats[0].base_stat}}
                            </v-col>
                        </v-row>
                        <v-row class="text-center ma-0 pa-0">
                            <v-col cols="8" class="text-left body-1 pa-0 ma-0">
                                <b>Velocidade</b>
                            </v-col>
                            <v-col cols="4" class="body-1 pa-0 ma-0">
                                {{pokemon.stats[5].base_stat}}
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonCard",
    props:{
        list:{
            type: Array
        },
        listOwned:{
            type: Array
        }
    },
    data(){
        return {
            pokemonDetail: 0
        }
    },
    mounted() {

    },
    methods:{
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        isCatched(pokemon){
            let catched = this.listOwned.find(poke => poke === pokemon.id)
            return catched
        },
        teste(pokemon){
            if(this.isCatched(pokemon)) {
                if (this.pokemonDetail === pokemon.id) this.pokemonDetail = 0
                else this.pokemonDetail = pokemon.id
            }
        }
    }
}
</script>

<style scoped>
    .silhouette {
        -webkit-filter: contrast(0) sepia(100%) hue-rotate(190deg) saturate(2000%) brightness(100%);
        filter: contrast(0) sepia(100%) hue-rotate(190deg) saturate(2000%) brightness(100%);
        opacity: 0.3;
    }

    .flip-card:hover {
        transform: scaleY(0.95);
        background-color: #dbdbdb;
    }
</style>