<script>

import { FoodCorner } from '../../data-card';
import AppCard from '../card/AppCard.vue'

export default {
    name: 'FoodCorner',
    components: { AppCard },
    data() {
        return { FoodCorner }
    }
}

</script>

<template>

    <div class="d-flex">
        <app-card v-for="article in FoodCorner" :key="article.title" :img="article.img" :alt="article.title"
            :title="article.title" :author="article.author" :date="article.date" :text="article.text"
            class="col-7 bg-white"></app-card>
        <div class="col-5 px-5">
            <img class="img-fluid" src="../../assets/img/ad-bg.jpg" alt="ad-bg">
            <img class="img-fluid" src="../../assets/img/singapore.jpg" alt="singapore">
            <button type="button" class="text-uppercase large-btn">
                <i class="fas fa-globe-americas"></i>
                View all City Guides
            </button>
        </div>
    </div>






</template>

<style lang="scss" scoped>
.large-btn {
    width: 400px;
}
</style>
