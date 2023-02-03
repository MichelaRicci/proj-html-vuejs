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

    <section class="py-5">

        <div class="col-6 offset-3 pb-4">
            <h4 class="text-uppercase">Culinary Collection</h4>
            <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc
                lobortis.</p>
        </div>

        <div class="d-flex container">
            <div class="d-flex flex-wrap justify-content-between">
                <app-card v-for="pic in picsart" :key="pic.id" :img="pic.img" :alt="pic.name" :label="pic.name"
                    class="col- text-uppercase bg-white  mx-0 pic-card">
                </app-card>
            </div>

        </div>

    </section>


</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Vidaloka&display=swap');

.text-uppercase {
    font-family: 'Fira Sans', sans-serif;
}

.pic-card {
    width: 22%;
    padding: 10px 80px;
    margin-bottom: 20px;

}
</style>