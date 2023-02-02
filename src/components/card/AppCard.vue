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
        text: String
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
    <div>
        <img :src="imgSrc" :alt="title">
        <h4>{{ title }}</h4>
        <p>{{ author }} <span>{{ date }}</span></p>
    </div>



</template>

<style lang="scss" scoped>

</style>