export default [{
  name: 'deduction',
  path: '/deduction',
  component: () => import('../component/DeductionIndex')
}, {
  name: 'applyDetail',
  path: '/applyDetail/:id',
  component: () => import('../component/ApplyDetail')
}]
