<template>
    <v-app>
        <v-app-bar
          app
          color="primary"
          dark
        >
            <div class="d-flex align-center">
                <v-img width="300" src="@/assets/logo.png"/>
            </div>
            <v-spacer></v-spacer>
            <v-btn class="secondary mr-4" @click="goToMenu">Dashboard</v-btn>
            <v-btn class="secondary mr-4" @click="goToMenu">Treinador</v-btn>
            <v-btn class="secondary mr-4" @click="goToMenu">Missões</v-btn>
            <v-btn class="secondary mr-4" @click="goToMenu">Pokedex</v-btn>
<!--            <v-btn class="secondary mr-4" @click="goToMenu">Caçadas</v-btn>-->
<!--            <v-btn class="secondary mr-4" @click="goToMenu">Conquistas</v-btn>-->
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
        </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import router from "@/router";

export default {
  name: 'App',
  data(){
      return {
      }
  },
    methods:{
        goToMenu(){
            switch (event.target.innerHTML) {
                case "Dashboard":
                    router.push('/')
                    break;
                case "Treinador":
                    router.push('/trainer')
                    break;
                case "Missões":
                    router.push('/missions')
                    break;
                case "Pokedex":
                    router.push('/pokedex')
                    break;
            }
        }
    }
};
</script>
