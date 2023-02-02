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

    <header>

        <top-header></top-header>

        <div><img src="../assets/img/avada-food-logo.png" alt=""></div>
        <div>
            <nav class="d-flex justify-content-around">
                <ul>
                    <li v-for="item in navList"><a href="#">{{ item }}</a></li>
                    <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>

                </ul>
            </nav>
        </div>

        <jumbotron></jumbotron>


    </header>

</template>

<style lang='scss' scoped>
img {
    width: 100px;
}

nav a {

    padding: 40px;
    text-decoration: none;
    color: #67615A;

}



.fa-solid {

    color: #67615A;
    font-size: 15px;


}
</style>
