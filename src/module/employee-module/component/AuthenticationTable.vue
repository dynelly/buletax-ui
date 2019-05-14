<template>
  <div>
    <div class="clearfix">
      <div class="form-right">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="searchObj.key" placeholder="按员工姓名/手机号搜索"/>
          </el-form-item>
          <el-form-item>
            <el-select v-model="searchObj.status">
              <el-option v-for="(item, index) in optionList"
                         :label="item.label"
                         :value="item.value"
                         :key="index"/>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <ele-datatables :ajax="ajax">
      <el-table-column label="员工姓名" prop="user_name" fixed/>
      <el-table-column label="手机号码" prop="user_phone"/>
      <el-table-column label="审核状态" prop="auth_state">
        <template slot-scope="scope">
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === -1" round type="danger">未实名</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 0" round>待审核</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 1" round type="success">完成认证</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="申请时间" prop="start_time"/>
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

  const EmployeeModule = namespace('employee') // 这里的名称要和模块中注册的名称一致
  @Component({
    components: {
      EleDatatables
    }
  })
  export default class EmployeeTable extends Vue {
    searchObj = {
      key: '',
      status: ''
    }
    optionList = [
      { label: '全部', value: '' },
      { label: '待审核', value: '0' },
      { label: '报送失败', value: '3' },
      { label: '报送中', value: '1' }
    ]
    ajax = '/table1'
    @EmployeeModule.State('name')
    name

    @EmployeeModule.Action('action1')
    action1

    created () {
      console.log('get data from namespaced module', this.name)
      this.action1().then(data => {
        console.log('get data from namespaced action', data)
      })
    }

    // 查看详情
    view (row) {
      this.$router.push({ name: 'authenticationDetail', params: { id: row.id } })
    }
  }

</script>

<style scoped lang="less">
  .content-radio {
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
