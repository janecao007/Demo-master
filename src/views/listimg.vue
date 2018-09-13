<template>
  <div>
    <p>{{$store.state.list.page}}</p>
    <!-- <childtemplate :testchildcon="parentscontent[0].name"></childtemplate> -->
    <button @click="reduce">上一页</button>&nbsp;
    <button @click="pageadd">下一页</button>
    <div style="margin-bottom:20px;"></div>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <h3>{{item.photographer}}</h3>
        <img :src="item.src.small" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import childtemplate from '@/components/learning/childtemplate.vue'
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      num: 22222,
      parentscontent: [{
        name: 'jane',
        age: 19
      }]
    }
  },
  components: {
    childtemplate
  },
  computed: {
    // list () {
    //   return this.$store.state.list.photolist
    // },    // list () {
    //   return this.$store.state.list.photolist
    // },
    ...mapState({
      list: state => state.list.photolist,
      page: state => state.list.page
    }),
    perpage () {
      return this.$store.state.list.per_page
    },
    testcontent () {
      return this.$store.state.test
    }
  },
  created () {
    this.getlistimg()
  },
  methods: {
    ...mapMutations(['testcon', 'add', 'reduce']),
    ...mapActions(['getImage']),
    gettestcon (num) {
      this.testcon({num})
      alert(this.$store.test)
    },
    getlistimg () {
      this.getImage()
    },
    pageadd () {
      this.add()
      this.getlistimg()
    },
    reduce () {
      if (this.page <= 1) {
        alert('请点击下一页')
        return false
      } else {
        this.reduce()
        this.getlistimg()
      }
    }
  }
}
</script>

<style scoped>
.list{
  width:1000px;
  margin:0 auto;
}
.list li{
  width:200px;
  height: 180px;
  float: left;
  margin-right:10px;
  margin-bottom: 10px;
  list-style: none;
  border:1px solid #ddd;
  margin-bottom: 10px;
  overflow: hidden;
}
.list li img{
  display: table-cell;
  vertical-align: middle;
  margin:0 auto;
}
</style>
