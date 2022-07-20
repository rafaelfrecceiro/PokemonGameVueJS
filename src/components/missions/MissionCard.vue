<template>
    <v-container class="mb-2">
        <v-row class="text-center">
            <v-col cols="12" style="border: 1px solid black; background-image: linear-gradient(blue, lightblue); border-radius: 10px">
                <v-container class="pa-0 ma-0" style="background-color: white">
                    <v-row class="text-center pa-0 ma-0" style="border: 1px solid black">
                        <v-col cols="2" class="ma-0 pa-0 d-flex flex-column justify-center">
                            <v-img :src="showTrainerSelected()" style="width: 150px"/>
                            <div style="border-top: 1px solid black; border-right: 1px solid black; background-color: lightcyan"><b>Aaroon</b></div>
                        </v-col>
                        <v-col cols="10" class="overline font-weight-black" style="height: 180px">
                            <span style="font-size: 1rem">Entrente o treinador para capturar um pokemon!</span>
                            <v-img width="120" :src="pokemonReward[0].sprites.front_default" class="pa-0 ma-0"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MissionCard",
    data(){
        return {
            pokemonReward: [],
            trainerSelected: ""
        }
    },
    mounted() {
        this.getPokemonById()

        let totalTrainers = require.context('@/assets/trainers', false, /\.(png)$/).keys().length
        let randomTrainer = Math.floor(Math.random(0,totalTrainers) * 100)
        let trainerSelected = require.context('@/assets/trainers', false, /\.(png)$/).keys()[randomTrainer]
        this.trainerSelected = trainerSelected.split("/")[1]
    },
    computed:{
    },
    methods:{
        async getPokemonById(){
            const a = await this.$store.dispatch('pokemon/getPokemonById', 10)
            console.log('a', a)
            this.pokemonReward.push(a)
        },
        showTrainerSelected(){
            return require("@/assets/trainers/"+ this.trainerSelected)
        }
    }
}
</script>

<style scoped>

</style>