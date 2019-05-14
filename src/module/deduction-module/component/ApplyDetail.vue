<template>
  <div>
    <div class="top clearfix">
      <div class="form-left">
        <span class="title">{{ name }}的个税申报详情</span>
      </div>
      <div class="form-right">
        <el-button size="small" type="primary" @click="back()">返回</el-button>
        <el-button size="small" type="primary" @click="back()">驳回</el-button>
        <el-button size="small" type="primary" @click="back()">通过</el-button>
      </div>
    </div>
    <div class="content">
      <ChildEduction/>
      <ContinueEduction/>
      <Housing/>
      <Medical/>
      <Support/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import ChildEduction from './ChildEduction' // 子女教育
  import ContinueEduction from './ContinueEduction' // 继续教育
  import Housing from './Housing' // 住房
  import Medical from './Medical' // 大病医疗
  import Support from './Support' // 赡养老人

  @Component({
    components: {
      ChildEduction,
      ContinueEduction,
      Housing,
      Medical,
      Support
    }
  })
  export default class ApplyDetail extends Vue {
    name = ''

    created () {
      this.name = '王小九'
    }

    // 返回
    back () {
      this.$router.push({ path: '/deduction' })
    }
  }
</script>

<style scoped>

</style>
