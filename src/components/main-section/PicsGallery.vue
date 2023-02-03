<script>

import { picsGallery } from '../../data-card';
import AppCard from '../card/AppCard.vue'


export default {
    name: 'AppRecipes',
    components: { AppCard },
    data() {
        return { picsGallery }
    }
}

</script>

<template>

    <div>
        <div class="d-flex">
            <app-card v-for="pic in picsGallery" :key="pic.id" :img="pic.img" :alt="pic.title" class="m-0 p-0">
            </app-card>
        </div>

    </div>


</template>

<style lang="scss" scoped>
img {
    padding-bottom: 0;
}
</style>
