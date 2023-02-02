<script>

import { RecipeArticle } from '../../data-card';
import AppCard from '../card/AppCard.vue'

export default {
    name: 'RecipeArticle',
    components: { AppCard },
    data() {
        return { RecipeArticle }
    }
}

</script>

<template>

    <app-card v-for="recipe in RecipeArticle" :key="recipe.title" :img="recipe.img" :alt="recipe.title"
        :tags="recipe.tags" :text="recipe.text" class="col-6"></app-card>




</template>

<style lang="scss" scoped>

</style>
