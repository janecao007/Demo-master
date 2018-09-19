<template>
  <div>
<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover v-if="!edit" trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
        <el-input
        v-if="edit"
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
        v-if="!edit"
          size="mini"
          @click="handleEdit(scope.$index, tableData)">编辑</el-button>
          <el-button
          v-if="edit"
          size="mini"
          @click="handleSuccess(scope.$index, tableData)">完成</el-button>
        <el-button
          size="mini"
          type="danger"
          @click.native.prevent="handleDelete(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input10: '',
      edit: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, rows) {
      this.edit = true
    },
    handleSuccess (index, rows) {
      this.edit = false
    },
    handleDelete (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
