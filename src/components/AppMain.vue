<script>

import AppJournal from './main-section/AppJournal.vue'
import AppRecipes from './main-section/AppRecipes.vue';

export default {
    data() {
        return {

        }

    },

    components: { AppJournal, AppRecipes }


}

</script>

<template>

    <app-journal></app-journal>

    <app-recipes></app-recipes>

</template>

<style lang="scss" scoped>

</style>
