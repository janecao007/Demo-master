<template>
  <div class="list">
    <button @click="add(-1)" v-show="show">上一页</button>
    <button @click="add(1)" >下一页</button>
    <ul class="tags">
      <li v-for="(item, index) in list" :key="index" @click="getClassificationImg(item)">{{item}}</li>
    </ul>
    <div style="clear:both;"></div>
    <div class="imgcon">
      <ul class="imgcon">
      <li v-for="(item, index) in listimgcon" :key="index">
        <img :src="item.post" alt="">
        <a :href="item.post">查看详情</a>
      </li>
    </ul>
    </div>
    <div style="clear:both;"></div>
    <!-- element-ui组件 -->
    <div style="margin-top: 30px;">
      <div>
        <el-button type="primary" @click="add(-1)" v-show="show">上一页</el-button>
      <el-button type="primary" @click="add(1)">下一页</el-button>
      </div>
      <div>
        <el-radio-group v-model="tabPosition" @change="getClassificationImg" style="margin-bottom: 30px;">
          <el-radio-button v-for="(item, index) in list" :key="index" :label="item">{{item}}</el-radio-button>
        </el-radio-group>
        <div class="imgcon">
          <ul class="imgcon">
            <li v-for="(item, index) in listimgcon" :key="index">
              <img :src="item.post" alt="">
              <a :href="item.post">查看详情</a>
            </li>
          </ul>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import fetch from '../components/js/fetch.js'
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      show: true,
      tabPosition: 'spring',
      query: {
        params: {
          q: 'background',
          perPage: 6,
          page: 1
        }
      },
      listconimg: [],
      listimgcon: []
    }
  },
  created () {
    this.getTags()
    this.getListImg()
  },
  methods: {
    jane () {
      console.log('ddd')
    },
    add (num) {
      if (num >= 1) {
        if (this.query.params.page <= 5) {
          if (this.query.params.page > 0) {
            this.show = true
          }
          this.getListImg()
          this.query.params.page++
        }
        if (this.query.params.page > 6) {
          alert('已经是最后一页')
        }
      }
      if (num === -1) {
        if (this.query.params.page === 1) {
          this.show = false
        }
        if (this.query.params.page > 1) {
          this.query.params.page--
          this.getListImg()
        }
      }
    },
    getTags () {
      axios.post('http://api.onlypic.cc', Object.assign({}, {cmd: 'tags'})).then(res => {
        this.list = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getListImg () {
      axios.post('http://api.onlypic.cc', Object.assign({}, this.query, {cmd: 'list'})).then(res => {
        this.listimgcon = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getClassificationImg (str) {
      this.query.params.q = str
      this.getListImg()
    }
  }
}
</script>

<style scoped>
.list button{
  margin:0 10px 30px;
}
ul.tags {
  width:600px;
  margin:0 auto;
}
ul.tags li{
    float: left;
    list-style: none;
    width:120px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 10px;
    color:white;
    border-right:1px solid ghostwhite;
    box-sizing: border-box;
    cursor: pointer;
     background: rgb(74, 146, 52,.7)
}
 ul.imgcon li{
  float: left;
  list-style: none;
  width:120px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background:url(../assets/default2.png) no-repeat center;
  margin-bottom: 10px;
  color:white;
  border-right:1px solid ghostwhite;
  box-sizing: border-box;
  cursor: pointer;
}
.list ul li:last-child{
  border-right: 0
}
.imgcon ul {
  width:600px;
  margin: 0 auto;
}
.imgcon ul li{
  float: left;
  width: 200px;
  height: 245px;
  overflow: hidden;
  color:white;
}
.imgcon ul li img{
  display: block;
  width:200px;
  height: 200px;
}
.imgcon ul li a{
  display: block;
  color:white;
  padding-top: 5px;
}
</style>
