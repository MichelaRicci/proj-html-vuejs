<script>

export default {
    name: 'AppFooter',

    data() {
        return {
            footerList: ['Recipes', ' Places', 'Blog', 'About', 'Contact']



        }

    },


}


</script>

<template>

    <div class="container">

        <div class="d-flex row-cols-4">

            <div><img src="../assets/img/avada-food-logo-footer.png" alt="logo"></div>
            <nav>
                <ul class="d-flex flex-column">
                    <li v-for=" item in footerList"><a href="#">{{ item }}</a></li>
                </ul>
            </nav>
            <div>
                <h6 class="text-uppercase">Contact</h6>

            </div>
            <div>
                <h6 class="text-uppercase">Get Our App</h6>
                <div class="app"><img src="../assets/img/download-android.png" alt="android"></div>
                <div class="app"><img src="../assets/img/download-app-store.png" alt="app-store"></div>

            </div>




        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables';

h6 {
    color: teal;
}

.app>img {
    width: 200px;
}
</style>
