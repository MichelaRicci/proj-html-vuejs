<script>


import AppJournal from './main-section/FoodieJournal.vue'
import AppRecipes from './main-section/AppRecipes.vue';
import CulinaryCollection from './main-section/CulinaryCollection.vue';

import FoodCorner from './main-section/FoodCorner.vue';
import ArticlesGallery from './main-section/ArticlesGallery.vue';
import PicsGallery from './main-section/PicsGallery.vue';

export default {
    data() {
        return {

        }

    },

    components: { AppJournal, AppRecipes, CulinaryCollection, FoodCorner, ArticlesGallery, PicsGallery }


}

</script>

<template>

    <app-journal></app-journal>

    <app-recipes></app-recipes>

    <culinary-collection></culinary-collection>

    <section class="py-5 container">
        <div class="d-flex justify-content-between">
            <div class="col-6">
                <h4 class="text-uppercase  text-start">Farm to Table</h4>
                <p class="text-start">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus
                    lacus non nunc
                    lobortis.</p>
            </div>
            <div>
                <button type="button" class="text-uppercase px-5 me-4">Read our blog</button>
            </div>
        </div>
    </section>

    <food-corner></food-corner>

    <articles-gallery></articles-gallery>

    <pics-gallery></pics-gallery>


</template>

<style lang="scss" scoped>

</style>
