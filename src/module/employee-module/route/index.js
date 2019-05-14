export default [{
  name: 'employee',
  path: '/employee',
  component: () => import('../component/EmployeeIndex')
}, {
  // 员工表单
  name: 'employeeForm',
  path: '/employeeForm/:id',
  component: () => import('../component/EmployeeForm')
}, {
  // 导入文件
  name: 'importFile',
  path: '/importFile',
  component: () => import('../component/ImportFile')
}, {
  // 实名认证审核详情
  name: 'authenticationDetail',
  path: '/authenticationDetail',
  component: () => import('../component/AuthenticationDetail')
}]
