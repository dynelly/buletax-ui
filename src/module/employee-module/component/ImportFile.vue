<template>
  <div>
    <div class="top">
      <span class="title">批量导入员工</span>
      <el-button size="small"
                 style="margin-left: 20px"
                 type="primary"
                 @click="back()">
        返回
      </el-button>
    </div>
    <div class="box">
      <div class="form-item">
        <label>公司名称</label>
        <el-input v-model="form.name" disabled style="width: 300px"/>
      </div>
      <div class="upload-box">
        <input type="file"
               class="fileTxt"
               name="mfile"
               ref="files">
        <div class="upload-icon">
          <i class="el-icon-upload2"/>
          <p>点击区域直接上传xls,xlsx</p>
        </div>
      </div>
      <div class="note">
        <div class="form-left">
          <i class="el-icon-tickets"/> 目前支持5MB以内的xlsx文件
        </div>
        <div class="form-right" @click="downFile()">
          <i class="el-icon-download"/>点击下载模板文件
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component()
  export default class ImportFile extends Vue {
    form = {
      name: '测试公司'
    }

    // 下载模板
    downFile () {
      console.info('下载模板')
    }

    back () {
      this.$router.push({ path: '/employee' })
    }
  }
</script>

<style scoped>
  .upload-box {
    margin: 0 auto;
    position: relative;
    width: 600px;
    height: 182px;
    border: 1px dashed rgba(118, 87, 173, .5);
    background: rgba(118, 87, 173, .04);
    text-align: center;
  }

  .note {
    margin: 0 auto;
    width: 600px;
    padding-top: 10px;
    cursor: pointer;
  }

  .fileTxt {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .upload-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .form-item {
    margin-bottom: 20px;
  }
</style>
