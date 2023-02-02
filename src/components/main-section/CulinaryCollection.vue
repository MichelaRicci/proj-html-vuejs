<script>

import { picsart } from '../../data-card';
import AppCard from '../card/AppCard.vue'

export default {
    name: 'CulinaryCollection',
    components: { AppCard },
    data() {
        return { picsart }
    }
}

</script>

<template>

    <h4 class="text-uppercase">Culinary Collection</h4>
    <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lobortis.</p>

    <div class="d-flex container">
        <div class="d-flex flex-wrap">
            <app-card v-for="pic in picsart" :key="pic.id" :img="pic.img" :alt="pic.name" :label="pic.name"
                class="col-3 text-uppercase">
            </app-card>
        </div>

    </div>


</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Vidaloka&display=swap');

.text-uppercase {
    font-family: 'Fira Sans', sans-serif;
}
</style>