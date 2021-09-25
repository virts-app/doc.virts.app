<template>
  <div class="container">
    <div>
      <h1 class="title">
        藏书阁
      </h1>
      </br>
      </br>
      <h2 class="subtitle">
        聚书藏书，良非易事。
      </h2>
      <h2 class="subtitle">
        善观书者，澄神端虑，净几焚香。
      </h2>
      <nuxt-link to="page">
      <el-button class="next_button">
        观之
      </el-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style>
  .next_button {
    margin-top: 80px;
    font-size: 40px;
    background-color: transparent;
  }

  .next_button:hover {
    padding-left: 50px;
    padding-right: 50px;
    background-color: transparent;
    transition: padding 0.5s;
  }

  .next_button:focus {
    background-color: transparent;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

</style>
