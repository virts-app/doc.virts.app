<template>
  <el-container>
    <el-header>
      <el-row class="head-list">
        <div class="head-list-left">
          <nuxt-link to="/">
            <el-button class="icon-button" icon="el-icon-s-home"></el-button>
          </nuxt-link>
        </div>
        <div class="head-list-right">
          <el-link :href='homePageUrl' target='_blank'>
            <el-button class="icon-button" icon="el-icon-s-promotion"></el-button>
          </el-link>
          <el-link>
            <el-button @click="" class="icon-button" icon="el-icon-message"></el-button>
          </el-link>
          <el-link target='_blank'>
            <el-button @click="openUnlock" class="icon-button" icon="el-icon-key"></el-button>
          </el-link>
          <el-link>
            <el-button @click="changeColorMode" class="icon-button" :icon="icon"></el-button>
          </el-link>
        </div>
      </el-row>
    </el-header>
    <el-main>
      <Chapter :chapters="chapters" />
      <Unlock ref="unlock" />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<style>
  .head-list {
    margin-top: 10px;
  }

  .head-list i {
    font-size: 20px;
  }

  .head-list-right {
    float: right;
  }

  .head-list-left {
    float: left;
  }

  .icon-button {
    background-color: transparent;
    border: none;
  }

  .allcard {
    margin: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .indexcontainer {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .card {
    margin: 10px;
    /* width: 100%; */
    background-size: cover !important;
    font-size: 30px;
  }

  .card:hover {
    cursor: pointer;
  }

  .bottom {
    margin-top: 13px;
    font-size: 20px;
    line-height: 12px;
  }

  .el-divider__text {
    font-size: 30px;
  }

  .block {
    cursor: not-allowed !important;
  }
  

</style>


<script>
  // import bookList from '~/assets/data/booklist.json'
  import Unlock from '~/components/Unlock.vue'
  export default {
    components: { Unlock },
    data() {
      return {
        chapters: [],
        homePageUrl: 'http://www.virts.app',
        icon: this.$colorMode.value == 'light' ? 'el-icon-moon' : 'el-icon-sunny'
      }
    },
    methods: {
      changeColorMode() {
        switch (this.$colorMode.value) {
          case 'dark':
            this.$colorMode.preference = 'light'
            this.icon = 'el-icon-moon'
            break
          case 'light':
            this.$colorMode.preference = 'dark'
            this.icon = 'el-icon-sunny'
            break
        }
      },
      openUnlock(data) {
        this.$refs.unlock.open(data)
      },
    },
    mounted(){
      const chapters = require(`~/assets/data/docs/${this.$route.params.docs}.json`)
      this.chapters = chapters
      // console.log
      // loader.then(data=>{
      //   console.log(data)
      // })
    }
  }

</script>
