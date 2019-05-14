<template>
  <div>
    <el-form>
      <el-card>
        <el-row>
          <el-col :span="12">
            <el-form-item label="流水号">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="提交时间">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请人">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核状态">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="申报项">11111</el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>基础信息</span>
        </div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="与本人关系">
              1111
              <div class="button-btn tell" @click="data.state=1" v-if="data.state==-1">
                <i class="iconfont el-icon-success"/>标记出错
              </div>
              <div class="button-btn none" @click="data.state=-1" v-if="data.state==1">
                <i class="iconfont el-icon-warning"/>取消标记
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="子女姓名">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="国籍">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证类型">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="身份证号码">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期">11111</el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>教育信息</span>
        </div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="子女受教育阶段">
              1111
              <div class="button-btn tell" @click="data.state=1" v-if="data.state==-1">
                <i class="iconfont el-icon-success"/>标记出错
              </div>
              <div class="button-btn none" @click="data.state=-1" v-if="data.state==1">
                <i class="iconfont el-icon-warning"/>取消标记
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="受教育日起">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="受教育日止">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="子女受教育终止时间">11111</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="就读国家">11111</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="就读学校">11111</el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card">
        <div slot="header">
          <span>相关证明材料</span>
        </div>
        <el-row>
          <el-col>1111</el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component()
  export default class ChildEduction extends Vue {
    data = {
      state: '-1'
    }
  }
</script>

<style scoped>

</style>
