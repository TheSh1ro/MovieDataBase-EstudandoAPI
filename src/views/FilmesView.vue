<script>
import axios from "axios";
export default {
  props: ["id"],

  data() {
    return {
      filmes: {},
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=29aadd5dd4da8c335474e0ecb99c0e8c&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.id}&with_watch_monetization_types=flatrate`;
    const res = await axios.get(url);
    this.filmes = res.data.results;
  },
  methods: {
    irParaDetalhes(id) {
      this.$router.push(`/detalhes/${id}`);
    },
  },
};
</script>
<template>
  <main id="main">
    <div class="description">
      <h1>Filmes do gênero com ID {{ id }}</h1>
    </div>
    <div class="movies-area">
      <div
        class="card"
        v-for="filme of filmes"
        :key="filme.id"
        @click="irParaDetalhes(filme.id)"
      >
        <h1>Nome: {{ filme.title }}</h1>
        <h1>ID: {{ filme.id }}</h1>
        <img
          src="https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg"
          alt=""
        />
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
