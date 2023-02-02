<script>

export default {
    name: 'AppFooter',

    data() {
        return {
            footerList: ['Recipes', ' Places', 'Blog', 'About', 'Contact'],
            contacts: ['775 New York Ave, Brooklyn, Kings, New York 11203', '+ 0100-505-0000', 'info@your-domain.com']
        }

    },


}


</script>

<template>

    <div class="container">

        <div class="d-flex row-cols-4 footer">

            <div>
                <img src="../assets/img/avada-food-logo-footer.png" alt="logo">
                <ul class="footer-icons">
                    <li><a href="#"><font-awesome-icon icon="fab fa-facebook" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fab fa-instagram" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fab fa-twitter" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fab fa-youtube" /></a></li>
                </ul>
            </div>

            <nav>
                <ul class="d-flex flex-column">
                    <li v-for=" item in footerList"><a href="#">{{ item }}</a></li>
                </ul>
            </nav>
            <div>
                <h6 class="text-uppercase">Contact</h6>
                <ul class="d-flex flex-column">
                    <li v-for=" contact in contacts"><a href="#">{{ contact }}</a></li>
                </ul>

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

.footer {
    padding-top: 30px;
}

h6 {
    color: teal;
}

.app>img {
    width: 200px;
}

.footer-icons {

    padding-top: 20px;


    a {

        padding: 10px;
    }
}
</style>
