<script>



export default {
    data() {
        return {
            navList: ['Home', 'Recipes', ' Places', 'Blog', 'About', 'Contact']
        }

    }

}

</script>

<template>

    <header>

        <div><img src="../assets/avada-food-logo.png" alt=""></div>
        <div class="nav-list">
            <nav>
                <ul>
                    <li v-for="item in navList"><a href="#">{{ item }}</a></li>
                    <li class="d-inline"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>

                </ul>
            </nav>
        </div>


    </header>

</template>

<style lang='scss' scoped>
img {
    width: 100px;
}

ul {
    display: flex;
}

nav a {

    padding: 10px;
    text-decoration: none;
    color: #67615A;

}

li {
    list-style-type: none;
}

.fa-solid {

    color: #67615A;
    font-size: 15px;


}
</style>
