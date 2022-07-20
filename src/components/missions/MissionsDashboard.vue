<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <mission-card/>
                <mission-card/>
                <mission-card/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MissionCard from "@/components/missions/MissionCard";

export default {
    name: "MissionsDashboard",
    components:{
        MissionCard
    }
}
</script>

<style scoped>

</style>