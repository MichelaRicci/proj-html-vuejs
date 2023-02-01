<script>
import { foodieJournal } from '../../data-card';


export default {
    name: 'AppCard',

    data() {
        return { foodieJournal }
    },

    props: {
        img: String,
        title: String,
        author: String,
        date: String,
        text: String
    },

    methods: {
        imgSrc: function (img) {
            return new URL(`../../assets/img/${img}.jpg`, import.meta.url).href;
        }
    }


}

</script>

<template>

    <div>
        <img :src="imgSrc(foodieJournal.img)" :alt="foodieJournal.title">
        <h4>{{ title }}</h4>
        <p>{{ author }} <span>{{ date }}</span></p>
    </div>



</template>

<style lang="scss" scoped>

</style>