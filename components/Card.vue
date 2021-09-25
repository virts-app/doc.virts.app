<template>
  <div>
    <div v-for="(item, index) in bookList" :key="index">
      <el-divider class="card-divider" content-position="left">{{item.category}}</el-divider>
      <el-row class="allcard">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(book, index) in item.books" :key="index">
          <el-card @click.native="toPage(book)" class="indexcontainer card" :class="book.isBlock && 'block'">
            <div style="padding: 14px;">
              <span><i v-show="book.isBlock" class="el-icon-lock"></i>{{book.isBlock ? '' : book.name}}</span>
              <div class="bottom clearfix">
                <div class="desc">{{book.isBlock ? '已锁定' : book.date}}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
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

  .el-divider__text {
    font-size: 30px;
  }

  .block {
    cursor: not-allowed !important;
  }

  .bottom {
    margin-top: 13px;
    font-size: 20px;
    line-height: 12px;
  }

</style>

<script>
  import bookList from '~/assets/data/booklist.json'
  export default {
    data() {
      return {
        bookList: bookList,
      }
    },
    methods: {
      pushTo(item) {
        console.log(11)
        console.log(item)
      },
      toPage(item) {
        !item.isBlock && window.open(item.url, "_blank")
      }
    },
  }

</script>
