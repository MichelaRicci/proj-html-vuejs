<script>

export default {

    name: 'TopHeader',

}

</script>

<template>

    <div class="container">
        <nav class="d-flex justify-content-between py-4">
            <ul class="nav-left text-small">
                <li><a href="#">Download App<span>iOS</span></a></li>
                <li><a href="#">Advertise with us</a></li>
            </ul>

            <ul class="nav-right">
                <li><a href="#"><font-awesome-icon icon="fab fa-facebook" /></a></li>
                <li><a href="#"><font-awesome-icon icon="fab fa-instagram" /></a></li>
                <li><a href="#"><font-awesome-icon icon="fab fa-twitter" /></a></li>
            </ul>

        </nav>
    </div>

</template>

<style lang='scss' scoped>
nav a {

    padding: 10px;
    text-decoration: none;
    color: #888786;

}

.text-small {
    font-size: 11px;
}
</style>
