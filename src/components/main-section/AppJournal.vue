<script>
import { foodies } from '../../data-card';
import AppCard from '../card/AppCard.vue'

export default {
    name: 'AppJournal',
    components: { AppCard },
    data() {
        return { foodies }
    }
}

</script>

<template>
    <section class="bg-white">

        <h4 class="text-uppercase">Foodie Journal</h4>

        <div class="d-flex justify-content-between">
            <app-card v-for="foodie in foodies" :key="foodie.title" :date="foodie.date" :author="foodie.author"
                :img="foodie.img" :title="foodie.title"></app-card>
        </div>

    </section>


</template>

<style lang="scss" scoped>

</style>
