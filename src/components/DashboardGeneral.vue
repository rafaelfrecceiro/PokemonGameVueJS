<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-container>
                    <v-row class="text-center">
                        <v-col cols="7" style="border: 1px solid black" class="mr-2">
                            DashGeral
                        </v-col>
                        <v-col cols="4" style="border: 1px solid black">
                            <v-container class="ma-0 pr-0 pl-0 pt-0">
                                <v-row class="text-center" style="background-color: cadetblue">
                                    <v-col cols="12" class="pa-0 pt-1 pb-1 ma-0 font-weight-black">
                                        Notícias
                                    </v-col>
                                </v-row>
                                <v-row class="text-center pt-0">
                                    <v-col cols="12" class="pa-2 pt-0 ma-0">
                                        <v-card
                                            class="mt-2"
                                            elevation="3"
                                            shaped
                                        >
                                            <v-card-title class="pa-2 pb-0 ma-0">
                                                Novos pokemons na área
                                            </v-card-title>
                                            <v-divider/>
                                            <v-card-text class="text-left">
                                                Entre agora e capture os novos pokemons da temporada!
                                            </v-card-text>
                                        </v-card>
                                        <v-card
                                            class="mt-2"
                                            elevation="3"
                                            shaped
                                        >
                                            <v-card-title class="pa-2 pb-0 ma-0">
                                                Novas missões!
                                            </v-card-title>
                                            <v-divider/>
                                            <v-card-text class="text-left">
                                                Agora estão disponíveis as missões de pokemons lendários. Venha capturá-los!
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "DashboardGeneral"
}
</script>

<style scoped>

</style>