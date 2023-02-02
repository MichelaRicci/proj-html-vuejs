<script>

import { recipes } from '../../data-card';
import AppCard from '../card/AppCard.vue'

export default {
    name: 'AppRecipes',
    components: { AppCard },
    data() {
        return { recipes }
    }
}

</script>

<template>

    <h4 class="text-uppercase">Popular Recipes</h4>

    <div class="d-flex flex-wrap">

        <app-card v-for=" recipe in recipes" :key="recipe.id" :img="recipe.img" :alt="recipe.title" class="col-6">
        </app-card>

    </div>


</template>

<style lang="scss" scoped>

</style>
