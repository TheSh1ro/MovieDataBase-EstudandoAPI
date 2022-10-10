<script setup>
import PageHeader from "./components/PageHeader.vue";
</script>

<template>
  <PageHeader></PageHeader>
  <RouterView></RouterView>
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

  background: linear-gradient(90deg, rgba(9,121,78,1) 20%, rgba(0,212,255,1) 100%);
  background-color: black;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
}
</style>
