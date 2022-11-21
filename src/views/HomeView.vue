<script>
import axios from "axios";
export default {
  data() {
    return {
      generos: {},
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=29aadd5dd4da8c335474e0ecb99c0e8c&language=pt-BR`;
    const res = await axios.get(url);
    this.generos = res.data.genres;
  },
  methods: {
    irParaGenero(id, name) {
      this.$router.push(`/filmes/${id}-${name}`);
    },
  },
};
</script>
<template>
  <main id="main">
    <div class="description">
      <h1>Selecione um gênero</h1>
    </div>
    <div class="trendingArea">
      <div
        class="card"
        v-for="genero of generos"
        :key="genero.id"
        @click="irParaGenero(genero.id, genero.name)"
      >
        <h1>{{ genero.name }}</h1>
      </div>
    </div>
  </main>
</template>
<style>
#main {
  background-image: url(https://img.freepik.com/vetores-gratis/vector-background-seamless-filme-retro_2065-725.jpg?w=2000);
}
.trendingArea {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  border: 1px solid white;
  background-color: black;
  padding: 1px;
}

.card {
  display: flex;
  flex-direction: column;

  background-color: black;
  color: white;
  padding: 10px;
  border: 1px solid black;
}
.card:hover {
  cursor: pointer;
  border: 1px solid red;
}

.card > img {
  max-height: 300px;
  max-width: 333px;
}
.card > h1 {
  font-size: 1.5rem;
  text-align: center;
}
</style>
