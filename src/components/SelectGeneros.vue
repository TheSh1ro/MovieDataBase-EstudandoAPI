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
  <div class="sla">
    <p>Generos</p>
    <p
      hidden
      value="1"
      v-for="genero of generos"
      @click="irParaGenero(genero.id, genero.name)"
      :key="genero.id"
    >
      {{ genero.name }}
    </p>
  </div>
</template>
<style>
.sla {
  color: rgb(219, 23, 23);
  background-color: rgb(0, 0, 0);
  font-size: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: grab;
  border: none;
}
</style>
