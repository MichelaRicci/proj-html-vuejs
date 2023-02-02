<script>



export default {
    name: 'AppCard',

    data() {
        return {}
    },

    props: {
        img: String,
        title: String,
        author: String,
        date: String,
        text: String,
        tags: String
    },


    computed: {
        imgSrc() {
            const url = new URL(`../../assets/img/${this.img}`, import.meta.url);
            return url.href;
        }
    },

}

</script>

<template>
    <div class="bg-white">
        <img class=" img-fluid" :src="imgSrc" :alt="title">
        <h4>{{ title }}</h4>
        <p>{{ author }} <span>{{ date }}</span></p>
        <p>{{ tags }}</p>
        <p>{{ text }}</p>
    </div>



</template>

<style lang="scss" scoped>

</style>