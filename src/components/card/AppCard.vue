<script>
import { store } from '../../data-card';


export default {
    name: 'AppCard',

    data() {
        return { store }
    },

    props: {
        img: String,
        title: String,
        author: String,
        date: String,
        text: String
    },


}

</script>

<template>

    <div>

        <img :src="`../../assets/img/${img}.jpg`" :alt="title">
        <h4>{{ title }}</h4>
        <p>{{ author }} <span>{{ date }}</span></p>
    </div>



</template>

<style lang="scss" scoped>

</style>