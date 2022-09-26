<template>
  <main id="main">
    <div class="trendingArea">
      <div class="card">
        <h1>Ação</h1>
        <img
          src="http://vacanerd.com.br/wp-content/uploads/2014/03/mzl.ltdunkrj-200x300.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Aventura</h1>
        <img
          src="https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Terror</h1>
        <img
          src="https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg"
          alt=""
        />
      </div>
      <div class="card">
        <h1>Romance</h1>
        <img
          src="https://br.web.img2.acsta.net/pictures/18/05/04/15/03/2133793.jpg"
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
