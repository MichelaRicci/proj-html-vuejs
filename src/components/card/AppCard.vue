<script>



export default {
    name: 'AppCard',

    data() {
        return {}
    },

    props: {
        img: String,
        title: String,
        label: String,
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
    <div class="mycard">
        <img v-if="img" class="img-fluid" :src="imgSrc" :alt="title">
        <h4 v-if="title">{{ title }}</h4>
        <h6 v-if="label">{{ label }}</h6>
        <p v-if="author">{{ author }} <span>{{ date }}</span></p>
        <p v-if="tags">{{ tags }}</p>
        <p v-if="text">{{ text }}</p>
    </div>



</template>

<style lang="scss" scoped>
.mycard {
    margin: 5px 10px;
}

img {
    padding-bottom: 10px;
}
</style>