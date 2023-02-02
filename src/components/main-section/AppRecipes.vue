<script>

import { recipes } from '../../data-card';
import AppCard from '../card/AppCard.vue'

import RecipeArticle from './RecipeArticle.vue';

export default {
    name: 'AppRecipes',
    components: { AppCard, RecipeArticle },
    data() {
        return { recipes }
    }
}

</script>

<template>

    <h4 class="text-uppercase">Popular Recipes</h4>

    <div class="d-flex container">

        <recipe-article class="col-7"></recipe-article>
        <div class="d-flex flex-wrap col-6">
            <app-card v-for="recipe in recipes" :key="recipe.id" :img="recipe.img" :alt="recipe.title" class="col-5">
            </app-card>
        </div>

    </div>


</template>

<style lang="scss" scoped>

</style>
