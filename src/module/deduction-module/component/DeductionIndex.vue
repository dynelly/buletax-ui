<template>
  <el-tabs v-model="activeIndex">
    <el-tab-pane label="申报审核" name="first" :lazy="true">
      <ApplyTable/>
    </el-tab-pane>
    <el-tab-pane label="个税档案" name="second" :lazy="true">
      <PersonalTable/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import ApplyTable from './ApplyTable'
  import PersonalTable from './PersonalTable'
  import { namespace } from 'vuex-class'

  const DeductionModule = namespace('deduction') // 这里的名称要和模块中注册的名称一致
  @Component({
    components: {
      ApplyTable,
      PersonalTable
    }
  })
  export default class DeductionIndex extends Vue {
    get activeIndex () {
      return this.$store.state.deduction.activeIndex
    }

    @DeductionModule.Mutation('updateActiveIndex')
    updateActiveIndex

    set activeIndex (theme) {
      this.updateActiveIndex(theme)
    }
  }
</script>

<style scoped>

</style>
