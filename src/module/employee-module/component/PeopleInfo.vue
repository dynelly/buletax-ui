<template>
  <el-form :model="infoForm"
           ref="infoForm"
           label-width="150px">
    <el-card class="box-card">
      <div slot="header">
        <span>个人基本信息</span>
        <el-tag style="margin-left: 10px">未实名</el-tag>
      </div>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="真实姓名">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="国籍地区">11111</el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="证件类型">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="证件号码">11111</el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="移动电话">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">11111</el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="出生日期">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电子邮件">11111</el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span>地址信息</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="经常居住地址">11111</el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span>其他</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="学历">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="民族">11111</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="职业">11111</el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span>纳税信息相关</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否境外人员">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否残疾">11111</el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否孤老">11111</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否烈属">11111</el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header">
        <span>任职受雇信息</span>
      </div>
      <el-row>
        <el-col>
          <el-form-item label="任职(受雇)单位名称">11111</el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="社会统一信用代码">11111</el-form-item>
        </el-col>
      </el-row>
    </el-card>
  </el-form>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component()
  export default class PeopleInfo extends Vue {
    infoForm = {}
  }
</script>

<style scoped>

</style>
