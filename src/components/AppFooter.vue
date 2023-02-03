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

    <footer class="">

        <div class="d-flex row-cols-4 text-start">

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
                    <li class="py-2" v-for=" item in footerList" :key="item.footerList"><a class="fw-bold" href="#">{{
                        item
                    }}</a></li>
                </ul>
            </nav>
            <div class="contacts">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <ul class="d-flex flex-column">
                    <li class="py-2" v-for=" contact in contacts" :key="contact in contacts"><a class=" text-start"
                            href="#">{{ contact }}</a></li>
                </ul>

            </div>
            <div>
                <h6 class="text-uppercase fw-bold">Get Our App!</h6>
                <div class="app"><img src="../assets/img/download-android.png" alt="android"></div>
                <div class="app py-3"><img src="../assets/img/download-app-store.png" alt="app-store"></div>

            </div>




        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables';

footer {
    padding-top: 30px;

    background-color: #ffffff;
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
        padding-left: 0;
    }
}

.contacts {
    ul {
        margin-left: 0;
        padding-left: 0;
    }
}
</style>
