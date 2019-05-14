<template>
  <div>
    <div class="top clearfix">
      <div class="form-left">
        <span class="title">{{ name }}的实名认证</span>
      </div>
      <div class="form-right">
        <el-button size="small" type="primary" @click="back()">返回</el-button>
        <el-button size="small" type="primary" @click="notpass()">不通过</el-button>
        <el-button size="small" type="primary" @click="pass()">通过</el-button>
      </div>
    </div>
    <div class="content">
      <el-form>
        <el-card>
          <el-row>
            <el-col :span="12">
              <el-form-item label="提交时间">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="申请人">11111</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="审核状态">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="申报项">11111</el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div slot="header">
            <span>个人信息</span>
          </div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="真实姓名">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="国籍(地区)">11111</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="证件类型">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="证件号码">11111</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="移动电话">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别">11111</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="出生日期">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电子邮件">11111</el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card>
          <div slot="header" class="clearfix">
            <span>地址信息</span>
          </div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="经常居住地">11111</el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card>
          <div slot="header" class="clearfix">
            <span>其他</span>
          </div>
          <el-row>
            <el-col :span="12">
              <el-form-item label="学历">11111</el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="名族">11111</el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="职业">11111</el-form-item>
            </el-col>
          </el-row>
        </el-card>
      </el-form>
    </div>
    <el-dialog title="未通过原因" :visible.sync="dialogVisible">
      <el-input type="textarea"
                :rows="12"
                :maxlength="200"
                placeholder="请填写未通过原因"
                resize="none"
                v-model="reason"/>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="ensureAdopt()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component()
  export default class AuthenticationDetail extends Vue {
    name = ''
    reason = ''
    dialogVisible = false

    created () {
      this.name = '王小九'
    }

    // 返回
    back () {
      this.$router.push({ path: '/employee' })
    }

    // 不通过
    notpass () {
      this.dialogVisible = true
    }

    // 通过
    pass () {
      this.$confirm('此操作将更新人员实名状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
        // this.back()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }

    // 确认不通过
    ensureAdopt () {
      this.dialogVisible = false
      console.log('审核不通过')
    }
  }
</script>

<style scoped>

</style>
