<template>
  <div>
    <div class="clearfix">
      <div class="form-left">
        <el-input v-model="searchObj.key" placeholder="按员工姓名/手机号搜索"/>
      </div>
      <div class="form-right">
        <el-button size="mini" type="primary" @click="send()">人员报送</el-button>
        <el-button size="mini" type="primary" @click="exportFile()">导出员工信息</el-button>
        <el-button size="mini" type="primary" @click="importFile()">导入</el-button>
        <el-button size="mini" type="primary" @click="add()">添加</el-button>
      </div>
    </div>
    <div class="content-radio">
      <el-radio v-model="searchObj.status"
                v-for="(item, index) in radioList"
                :label="item.value"
                :key="index">
        {{ item.label }}
      </el-radio>
    </div>
    <ele-datatables :ajax="ajax">
      <el-table-column label="员工姓名" prop="user_name" fixed/>
      <el-table-column label="手机号码" prop="user_phone"/>
      <el-table-column label="公司名称" prop="company_name"/>
      <el-table-column label="入职时间" prop="time"/>
      <el-table-column label="实名状态" prop="auth_state">
        <template slot-scope="scope">
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === -1" round type="danger">未实名制</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 0" round>待审核</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.auth_state) === 1" round type="success">完成认证</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="报送状态" prop="rzzt">
        <template slot-scope="scope">
          <el-tag v-if="Number.parseInt(scope.row.rzzt) === 0" round type="danger">待报送</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.rzzt) === 1" round>报送中</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.rzzt) === 2" round type="danger">报送失败</el-tag>
          <el-tag v-if="Number.parseInt(scope.row.rzzt) === 3" round type="success">报送成功</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon el-icon-edit"
             style="cursor: pointer"
             title="编辑"
             @click="edit(scope.row)"/>
          <el-dropdown trigger="click" @command="comfirm">
            <span class="el-dropdown-link">
              <i class="el-icon el-icon-more" style="cursor: pointer" title="更多"/>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="0" :data="scope.row">离职</el-dropdown-item>
                <el-dropdown-item command="1" :data="scope.row">调动</el-dropdown-item>
              </el-dropdown-menu>
            </span>
          </el-dropdown>
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
    radioList = [
      { label: '全部', value: '' },
      { label: '报送成功', value: '4' },
      { label: '报送失败', value: '3' },
      { label: '报送中', value: '1' },
      { label: '待报送', value: '0' }
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

    // 添加员工
    add () {
      this.$router.push({ name: 'employeeForm', params: { id: 'new' } })
    }

    // 编辑
    edit (row) {
      this.$router.push({ name: 'employeeForm', params: { id: row.id } })
    }

    // 导出员工
    exportFile () {
      console.info('导出员工信息')
    }

    // 导入员工信息
    importFile () {
      this.$router.push({ name: 'importFile' })
    }

    // 人员报送
    send () {
      this.$confirm('员工信息将报送至国税局，请确认', '人员报送').then(() => {
        // 调用报送接口
      }).catch(() => {})
    }

    comfirm (type, component) {
      let data = component.$attrs.data
      if (type === '0') {
        this.$confirm('员工离职会影响次月员工的申报，请确认', '离职').then(() => {
          if (data.rzzt !== '1') {
// 调用离职接口
          } else {
            this.$message.error('员工报送中，不可离职操作')
          }
        }).catch(() => {})
      } else if (type === '1') { // 1为调职
// 调用调职接口
      }
    }
  }

</script>

<style scoped lang="less">
  .content-radio {
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
