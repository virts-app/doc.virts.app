<template>
  <div class="unlock">
    <el-dialog title="暂不开张" :width='"75%"' :visible.sync="dialogFormVisible" center>
      <el-form :model="form">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14">
            <el-form-item>
              <!-- <el-input class="unlock-input" v-model="form.password" autocomplete="off"></el-input> -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" :icon="'el-icon-unlock'" @click="dialogFormVisible = false"></el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<style>
  .unlock .el-form-item__content {
    margin: 0 20px !important;
  }

  .unlock .el-dialog__title {
    font-size: 3em;
  }

  .unlock .el-dialog__header {
    padding-top: 40px;
  }

  .unlock-input input {
    font-size: 30px;
  }

  .unlock-input input:focus {
    text-align: center;
  }

  .dialog-footer>button i {
    font-size: 20px;
  }

  .dialog-footer>button:hover {
    padding-left: 50px;
    padding-right: 50px;
    transition: padding 0.5s;
  }

</style>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          password: '',
        },
      };
    },
    methods: {
        open(data){
            this.dialogFormVisible = true
        }
    },
  };

</script>
