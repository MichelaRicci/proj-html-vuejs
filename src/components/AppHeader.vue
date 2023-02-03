<script>

import TopHeader from './header-section/TopHeader.vue'
import Jumbotron from './header-section/Jumbotron.vue'



export default {
    data() {
        return {
            navList: ['Home', 'Recipes', ' Places', 'Blog', 'About', 'Contact']
        }

    },

    components: { TopHeader, Jumbotron }

}

</script>

<template>

    <header class="bg-white">

        <top-header></top-header>

        <div><img class="mb-4" src="../assets/img/avada-food-logo.png" alt="logo"></div>
        <div>
            <nav class="d-flex justify-content-around">
                <ul>
                    <li class="fw-bold" v-for="item in navList"><a href="#">{{ item }}</a></li>
                    <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>

                </ul>
            </nav>
        </div>

        <jumbotron></jumbotron>


    </header>

</template>

<style lang='scss' scoped>
img {
    width: 150px;
}

.fa-solid {

    color: #67615A;
    font-size: 15px;


}
</style>
