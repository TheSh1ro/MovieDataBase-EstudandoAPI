<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=29aadd5dd4da8c335474e0ecb99c0e8c&language=pt-BR`;
    const res = await axios.get(url);
    this.filme = res.data;
  },
};
</script>
<template>
  <main id="main">
    <div class="about-movie">
      <h1 style="color: yellow">{{ filme.title }}</h1>
      <h1>Sinopse</h1>
      <p class="sinopse">{{ filme.overview }}</p>
    </div>
  </main>
</template>
<style scoped>
.about-movie {
  padding: 20px 40px;
  color: rgb(255, 254, 254);
  background-color: rgba(0, 0, 0, 0.75);
  width: fit-content;
}
h1 {
  text-align: center;
}
.sinopse {
  font-size: 1.2rem;
  padding-inline: 30%;
}
</style>
