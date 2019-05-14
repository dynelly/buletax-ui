<template>
  <div>
    <div class="clearfix">
      <div class="form-left">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="searchObj.key" placeholder="按员工姓名/手机号搜索"/>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="searchObj.time"
                            type="month"
                            value-format="yyyy-MM"
                            placeholder="选择日期"/>
          </el-form-item>
          <el-form-item>
            <el-select v-model="searchObj.status">
              <el-option v-for="item in option"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"/>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-right">
        <el-button size="mini" type="primary" @click="send()">审批通过</el-button>
      </div>
    </div>
    <ele-datatables :ajax="ajax">
      <el-table-column type="selection" width="55"/>
      <el-table-column label="申报流水号" prop="user_name" fixed/>
      <el-table-column label="姓名" prop="user_name"/>
      <el-table-column label="手机号码" prop="user_phone"/>
      <el-table-column label="申报项" prop="rbx"/>
      <el-table-column label="申报金额" prop="rbje"/>
      <el-table-column label="审核状态" prop="auth_state">
        <template slot-scope="scope">
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === -1" round type="danger">待确认</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 0" round>已确认</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 1" round type="success">驳回</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="申报时间" prop="time"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="view(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </ele-datatables>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import EleDatatables from 'element-datatables'
  import { namespace } from 'vuex-class'

  const DeductionModule = namespace('deduction') // 这里的名称要和模块中注册的名称一致
  @Component({
    components: {
      EleDatatables
    }
  })
  export default class ApplyTable extends Vue {
    searchObj = {
      key: '',
      status: '',
      time: ''
    }
    option = [
      { label: '全部', value: '' },
      { label: '待确认', value: '1' },
      { label: '已确认', value: '2' },
      { label: '驳回', value: '-1' }
    ]
    ajax = '/table1'
    @DeductionModule.State('name')
    name

    @DeductionModule.Action('action1')
    action1

    created () {
      console.log('get data from namespaced module', this.name)
      this.action1().then(data => {
        console.log('get data from namespaced action', data)
      })
    }

    // 查看详情
    view (id) {
      this.$router.push({ name: 'applyDetail', params: { id: id } })
    }
  }

</script>

<style scoped lang="less">
  .content-radio {
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
