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
        :title="recipe.title" :author="recipe.author" :date="recipe.date" :tags="recipe.tags" :text="recipe.text"
        class="col-6 bg-white"></app-card>




</template>

<style lang="scss" scoped>
* {
    text-align: left;
}
</style>
