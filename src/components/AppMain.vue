<script>


import AppJournal from './main-section/AppJournal.vue'
import AppRecipes from './main-section/AppRecipes.vue';
import CulinaryCollection from './main-section/CulinaryCollection.vue';

import FoodCorner from './main-section/FoodCorner.vue';

export default {
    data() {
        return {

        }

    },

    components: { AppJournal, AppRecipes, CulinaryCollection, FoodCorner }


}

</script>

<template>

    <app-journal></app-journal>

    <app-recipes></app-recipes>

    <culinary-collection></culinary-collection>

    <section class="py-5">
        <div class="d-flex justify-content-between">
            <div class="col-6 text-start">
                <h4 class="text-uppercase">Farm to Table</h4>
                <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc
                    lobortis.</p>
            </div>
            <div>
                <button type="button" class="text-uppercase px-5">Read our blog</button>
            </div>
        </div>
    </section>

    <food-corner></food-corner>


</template>

<style lang="scss" scoped>

</style>
