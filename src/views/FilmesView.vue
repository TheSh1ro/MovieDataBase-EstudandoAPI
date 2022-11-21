<script>
import axios from "axios";
export default {
  props: ["info"],

  data() {
    return {
      id: "",
      name: "",
      image: ",",
      filmes: {},
    };
  },
  async created() {
    this.id = this.info.split("-")[0];
    this.name = this.info.split("-")[1];
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=29aadd5dd4da8c335474e0ecb99c0e8c&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.id}&with_watch_monetization_types=flatrate`;
    const res = await axios.get(url);
    this.filmes = res.data.results;
  },
  methods: {
    irParaDetalhes(id) {
      this.$router.push(`/detalhes/${id}`);
    },
    setImage(path) {
      return "https://image.tmdb.org/t/p/original" + path;
    },
  },
};
</script>
<template>
  <main id="main">
    <div class="description">
      <h1>{{ this.name }}</h1>
    </div>
    <div class="movies-area">
      <div
        class="card"
        v-for="filme of filmes"
        :key="filme.id"
        @click="irParaDetalhes(filme.id)"
      >
        <h1>{{ filme.title }}</h1>
        <img :src="setImage(filme.backdrop_path)" />
      </div>
    </div>
  </main>
</template>
<style scoped>
.movies-area {
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: center;
  align-items: center;
}
.card {
  margin: 1vw;
}
</style>
