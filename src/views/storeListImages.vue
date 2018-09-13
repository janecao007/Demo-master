<template>
  <div>
    <button @click="reduce">上一页</button>&nbsp;
    <button @click="add">下一页</button>
    <div class="nav">
      <ul>
        <li @click="clicknav(item)" v-for="(item,index) in listNav" :key="index">{{item}}</li>
      </ul>
    </div>
    <div style="clear:both"></div>
    <div class="listimg">
      <ul>
        <li v-for="(item, index) in listimg" :key="index">
          <img :src="item.post" alt="">
        </li>
      </ul>
    </div>
    <watchvue></watchvue>
  </div>
</template>

<script>
import watchvue from './wach.vue'
import { getList, getImageList } from '../api/index'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      listNav: [],
      listimg: [],
      query: {
        params: {
          q: 'background',
          perPage: 6,
          page: 1
        }
      }
    }
  },
  components: {
    watchvue
  },
  created () {
    this._getList()
    this._getListImg()
  },
  methods: {
    ...mapMutations(['picadd', 'picreduce']),
    _getList () {
      getList().then(res => {
        this.listNav = res.data
      })
    },
    _getListImg () {
      getImageList(this.$store.state.query).then(res => {
        this.listimg = res.data
        console.log(res)
      })
    },
    clicknav (str) {
      this.$store.state.query.params.q = str
      this._getListImg()
    },
    add () {
      this.picadd()
      this._getListImg()
    },
    reduce () {
      this.picreduce()
      this._getListImg()
    }
  }
}
</script>

<style>
.nav ul {
  width: 600px;
  margin:0 auto;
  margin-bottom:20px;
}
.nav ul li{
  background: green;
  color:white;
  border-right: 1px solid white;
  box-sizing: border-box;
  width:100px;
  line-height: 45px;
  float: left;
  text-align: center;
  list-style: none;
  cursor:pointer
}
.listimg ul{
  width:620px;
  margin:0 auto;
  margin-top:20px;
}
.listimg ul li{
  width:200px;
  height: 200px;
  margin-bottom:10px;
  margin-right: 10px;
  float: left;
  list-style: none;
  overflow: hidden;
}
.listimg ul li:nth-child(3n){
  margin-right: 0
}
.list ul li img{
  display: block;
}
</style>
