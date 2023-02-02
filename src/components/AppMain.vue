<script>


import AppJournal from './main-section/AppJournal.vue'
import AppRecipes from './main-section/AppRecipes.vue';
import CulinaryCollection from './main-section/CulinaryCollection.vue';

export default {
    data() {
        return {

        }

    },

    components: { AppJournal, AppRecipes, CulinaryCollection }


}

</script>

<template>

    <app-journal></app-journal>

    <app-recipes></app-recipes>

    <culinary-collection></culinary-collection>


</template>

<style lang="scss" scoped>

</style>
