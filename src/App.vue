<script setup>
  import { RouterView } from "vue-router"
  import Header from "./views/generic/Header.vue"

</script>

<template>
  <Header />
  <RouterView />
</template>

<style >
  @font-face {
  font-family: Font;
  src: url(./assets/lexend.ttf);
}
  * {
    list-style-type: none;
    text-decoration: none;
    color: #0b2921;
    font-family: Font;
    padding: 0;
    margin: 0;
  }
</style>
