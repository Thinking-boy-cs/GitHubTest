<template>
  <operation-table
    :tableData="tableData"
    :tableColumns="tableColumns"
    @deleterow="onDelete"
    @saverow="onSave"
  >
    <a slot="action" slot-scope="text">action</a>
  </operation-table>
</template>

<script>
import moment from 'moment'
import operaionTable from './utils/operationTable'
const columns = [
  {
    title: '员工ID',
    width: 250,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    scopedSlots: { customRender: 'id' }
  },
  {
    title: '体温情况',
    width: 200,
    fixed: 'left',
    dataIndex: 'temperature',
    key: 'temperature',
    scopedSlots: { customRender: 'temperature' }
  },
  {
    title: '签到时间',
    width: 250,
    dataIndex: 'signTime',
    key: 'signTime',
    fixed: 'left',
    scopedSlots: { customRender: 'signTime' },
    customRender: (text) => {
      return moment(text).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  {
    title: '签到地点',
    fixed: 'left',
    dataIndex: 'location',
    key: 'location',
    width: 200,
    scopedSlots: { customRender: 'location' }
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' }
  }
]
const data1 = []
for (let i = 0; i < 100; i++) {
  data1.push({
    key: i,
    id: `Edrward ${i}`,
    temperature: 36.6,
    signTime: '2020-11-20 15:21:16',
    location: '昌元街道学院路160号西南大学荣昌校区'
  })
}
export default {
  components: {
    'operation-table': operaionTable
  },
  data () {
    return {
      tableColumns: columns,
      tableData: data1,
      childData: 'test data',
      options: [
        {
          name: 'edit',
          method: (e) => {}
        },
        {
          name: 'view',
          method: (e) => {}
        },
        {
          name: 'delete',
          method: (e) => {}
        }
      ]
    }
  },
  methods: {
    onDelete (key) {
      const tableData = [...this.tableData]
      console.log(key)
      // this.tableData = tableData.filter(item => item.key !== key)
    },
    onSave (obj) {
      this.$axios.post('', obj).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    const that = this
    this.$axios
      .get(
        'http://localhost:8080/api/pigeon/govern/findSigned?companyId=232b7da9-9582-4&theTime=2021-03-13'
      )
      .then((res) => {
        console.log(res)
        that.tableData = res.data.data
      })
  }
}
</script>

<style scoped></style>
