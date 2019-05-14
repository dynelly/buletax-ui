<template>
  <div>
    <div class="top clearfix">
      <div class="form-left">
        <span class="title">{{ title }}</span>
      </div>
      <div class="form-right">
        <el-button size="small" type="primary" @click="back()">返回</el-button>
      </div>
    </div>
    <div class="content">
      <el-form :model="infoForm"
               :rules="rules"
               ref="infoForm"
               label-width="100px">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="基础信息" name="1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="员工姓名" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="国籍" prop="user_name" required>
                  <el-select v-model="infoForm.user_country">
                    <el-option v-for="item in countries"
                               style="width: 100%"
                               :key="item.id"
                               :label="item.name"
                               :value="item.name"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="手机号码" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件类型" prop="user_name" required>
                  <el-select v-model="infoForm.user_country">
                    <el-option v-for="item in countries"
                               style="width: 100%"
                               :key="item.id"
                               :label="item.name"
                               :value="item.name"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="证件号码" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司名称" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="性别" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="雇员类型" prop="user_name" required>
                  <el-input v-model="infoForm.user_name"/>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="note-box">
              <i class="icon el-icon-warning"/>
              境内人员，国籍只能填写【中国】及证件号码
            </div>
          </el-collapse-item>
          <el-collapse-item title="其他信息" name="2">
            <el-tabs>
              <el-tab-pane label="雇佣信息">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="入职时间" prop="user_name" required>
                      <el-input v-model="infoForm.user_name"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="工号" prop="user_name" required>
                      <el-input v-model="infoForm.user_name"/>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="所在职位" prop="user_name" required>
                      <el-input v-model="infoForm.user_name"/>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="员工邮箱" prop="user_name" required>
                      <el-input v-model="infoForm.user_name"/>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="自然人信息" v-if="show">
                <PeopleInfo :id="infoForm.id"/>
              </el-tab-pane>
            </el-tabs>
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </div>
    <div class="footer">
      <el-button @click="back()" size="small" type="primary">取消</el-button>
      <el-button @click="submitForm('infoForm')" size="small" type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import PeopleInfo from './PeopleInfo'

  const EmployeeModule = namespace('employee') // 这里的名称要和模块中注册的名称一致
  @Component({
    components: {
      PeopleInfo
    }
  })
  export default class EmployeeForm extends Vue {
    activeNames = ['1', '2']
    title = ''
    show = false
    infoForm = {
      id: '',
      name: ''
    }
    countries = [] // 国籍
    rules = {
      user_name: [
        { required: true, message: '请输入员工姓名', trigger: 'blur' },
        { min: 1, max: 5, message: '长度在 1 到 16 个字符', trigger: 'blur' }
      ]
    }
    @EmployeeModule.Action('loadCountry')
    loadCountry

    created () {
      let id = this.$route.params.id
      console.info(id)
      if (id === 'new') {
        this.title = '新增员工'
        this.show = false
      } else {
        this.title = '编辑员工'
        this.show = true
      }
      // 获取国籍
      this.loadCountry().then(data => {
        this.countries = data
      })
    }

    back () {
      this.$router.push({ path: '/employee' })
    }

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .footer {
    margin-top: 10px;
    text-align: center;
  }

  .el-input, .el-select {
    width: 50% !important;
  }

  .note-box {
    width: 720px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    color: rgb(68, 176, 255);
    font-size: 12px;
    background: rgba(68, 176, 255, 0.1);
    border-radius: 6px;
  }

</style>
