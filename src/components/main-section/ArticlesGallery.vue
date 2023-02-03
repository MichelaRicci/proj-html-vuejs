<script>

import { articlesGallery } from '../../data-card';
import AppCard from '../card/AppCard.vue'


export default {
    name: 'AppRecipes',
    components: { AppCard },
    data() {
        return { articlesGallery }
    }
}

</script>

<template>

    <div class="container pb-5">

        <div class="d-flex flex-wrap col-8">
            <app-card v-for="article in articlesGallery" :key="article.id" :img="article.img" :alt="article.title"
                :author="article.author" :date="article.date" :title="article.title" class="bg-white col-5">
            </app-card>


            <div class="m-start">
                <button type="button" class="text-uppercase px-5">Load more posts</button>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
button {
    width: 740px;
    background-color: #EDEDE7;
    color: #000000;
    margin-left: 10px;



}
</style>
