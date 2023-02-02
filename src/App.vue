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
ul {
  display: flex;

  li {
    list-style-type: none;
  }

}
</style>
