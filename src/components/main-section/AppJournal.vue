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

    <div class="d-flex justify-content-between">
        <h4>titolo</h4>
        <app-card v-for="foodie in foodies" :key="foodie.title" :date="foodie.date" :author="foodie.author"
            :img="foodie.img" :title="foodie.title"></app-card>
    </div>


</template>

<style lang="scss" scoped>

</style>
