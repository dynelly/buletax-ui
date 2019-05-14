<template>
  <el-tabs v-model="activeIndex">
    <el-tab-pane label="员工名单" name="first" :lazy="true">
      <EmployeeTable/>
    </el-tab-pane>
    <el-tab-pane label="实名认证审核" name="second" :lazy="true">
      <AuthenticationTable/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import EmployeeTable from './EmployeeTable'
  import AuthenticationTable from './AuthenticationTable'
  import { namespace } from 'vuex-class'

  const EmployeeModule = namespace('employee') // 这里的名称要和模块中注册的名称一致
  @Component({
    components: {
      EmployeeTable,
      AuthenticationTable
    }
  })
  export default class EmployeeIndex extends Vue {
    get activeIndex () {
      return this.$store.state.employee.activeIndex
    }

    @EmployeeModule.Mutation('updateActiveIndex')
    updateActiveIndex

    set activeIndex (theme) {
      this.updateActiveIndex(theme)
    }
  }
</script>

<style scoped>

</style>
