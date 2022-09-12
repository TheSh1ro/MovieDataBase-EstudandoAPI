<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <header id="header">
    <PageHeader></PageHeader>
  </header>
  <main id="main">
    <RouterView></RouterView>
  </main>
</template>

<style>
body {
  font-size: 16px;
}
* {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  text-decoration: none;
  color: inherit;
}

#app {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr;
}

#main {
  min-height: 90vh;

  color: black;
  background-color: #17a7a8;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  padding: 5vh 5vw;
}
</style>
