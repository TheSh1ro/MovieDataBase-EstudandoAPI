<script>
export default {
  props: ["id"],
};
</script>
<template>
  <main id="main">
    <h1>Filmes - {{ id }}</h1>
    <div class="trendingArea">
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Autor</h1>
        <img
          src="https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2022/03/2022-03-28t024038z_1815439459_hp1ei3s06vh5w_rtrmadp_3_awards-oscars-sohbdegb9ovl.jpg"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
<style>
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
