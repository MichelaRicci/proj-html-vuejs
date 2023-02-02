<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>

  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>

</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/style.scss' as *;



#app {
  background-color: $lightgray;
}

ul a {

  padding: 40px;
  text-decoration: none;
  color: #67615A;

}

ul {
  display: flex;

  li {
    list-style-type: none;
  }

}
</style>
