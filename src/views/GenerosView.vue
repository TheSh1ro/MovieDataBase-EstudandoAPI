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
    <h1>Gêneros</h1>
  </div>
    <div class="trendingArea">
      <div
        class="card"
        v-for="genero of generos"
        :key="genero.id"
        @click="irParaGenero(genero.id, genero.name)"
      >
        <h1>{{ genero.name }}</h1>
        <img
          src="https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
<style>
#main {
  background-image: url(https://img.freepik.com/vetores-gratis/vector-background-seamless-filme-retro_2065-725.jpg?w=2000);
}
.trendingArea {
  padding: 5vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  border: 5px solid black;
  cursor: default;
}
.card:hover {
  cursor: pointer;
}

.card > img {
  max-height: 300px;
  max-width: 333px;
}
.card > h1 {
  padding: 1vh;
  font-size: 1.5rem;
  background-color: rgb(0, 0, 0);
  color: white;
  text-align: center;
}
</style>
