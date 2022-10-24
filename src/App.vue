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

  background: linear-gradient(
    90deg,
    rgba(9, 121, 78, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
  background-color: black;
  background-image: url(https://img.freepik.com/vetores-gratis/vector-background-seamless-filme-retro_2065-725.jpg?w=2000);
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
  gap: 2vh;
}
.description {
  padding: 1vh;

  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  color: white;
}
</style>
