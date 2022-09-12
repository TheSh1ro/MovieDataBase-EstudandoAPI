<template>
  <div class="pageview-container">
    <span class="pageview-button">Gênero</span>
    <span class="pageview-button">Em alta</span>
    <span class="pageview-button">Atores</span>
  </div>
</template>

<style scoped>
#header {
  color: #fe958f;
  background-color: #122f51;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.pageview-container {
  cursor: default;

  display: flex;
  flex-direction: row;
  gap: 1vw;
}
.pageview-button {
  padding: 5px;
  cursor: pointer;
}
.pageview-button:hover {
  background-color: rgb(151, 31, 31);
  color: #ffb2ae;
}
</style>
