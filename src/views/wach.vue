<template>
  <div>
        <div>
           <el-radio-group v-model="val" @change="urlcon">
      <el-radio-button v-for="(item,index) in adress" :label="index" :key="index">
{{item}}
      </el-radio-button>
    </el-radio-group>

    </div>
    <el-input  v-model="val"></el-input>
    <p>{{valcon}}</p>
    <button @click="myfun">点击</button>
    <p>{{text}}</p>
    <p>{{newarr}}</p>
    <p>{{foreacharr}}</p>
    <p>{{maparr}}</p>
    <p>{{reducearr}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: '',
      title: '',
      valcon: '',
      text: '',
      url: 'http://www.runoob.com/js/js-tutorial.html',
      adress: [
        '北京',
        '上海',
        '合肥'
      ],
      val1: [
        '北京',
        '上海',
        '合肥'
      ],
      val2: [
        'hefei',
        'shanghai',
        'beijing'
      ],
      newarr: [],
      numarr: [1, 2, 4, 5, 6, 7],
      foreacharr: [],
      maparr: [],
      reducearr: Number
    }
  },
  created () {
    this.reducefun()
    this.mapfun()
    this.foreachfun()
    this.filterfun()
    this.arrdis(this.val1, this.val2)
    this.forofun()
  },
  methods: {
    arrdis (val1 = 3, ...val2) {
      console.log(val2)
    },
    filterfun () {
      const arr = [1, 2, 4, 5, 6, 7]
      this.newarr = arr.filter((val) => { return val > 5 })
      // console.log(this.newarr)
    },
    reducefun () {
      const arr = [1, 2, 4, 5, 6, 7]
      function sum (val1, val2) {
        return val1 + val2
      }
      this.reducearr = arr.reduce(sum)
      // this.reducearr = total
      console.log(this.reducearr)
    },
    mapfun () {
      const arr = [1, 2, 4, 5, 6, 7]
      this.maparr = arr.map((val) => { return val * 5 })
    },
    foreachfun () {
      let arr = [{
        a: 1,
        b: 2
      }, {
        a: 3,
        b: 4
      }]
      arr.forEach(item => {
        item.a = 10
      })
      console.log(arr)
    },
    urlcon (val) {
      switch (val) {
        case 0:
          window.location.href = 'http://www.runoob.com/js/js-tutorial.html'
          break
        case 1:
          window.location.href = 'http://www.iconfont.cn/'
          break
        case 2:
          window.location.href = 'http://es6.ruanyifeng.com/#docs/string'
          break
        default:
          window.location.href = 'http://www.runoob.com/js/js-tutorial.html'
          break
      }
    },
    forofun () {
      for (let i of this.adress) {
        console.log(i)
      }
    },
    myfun () {
      const drink = prompt('你最喜欢的鸡尾酒饮料')
      switch (drink) {
        case 'Martini':
          this.text = '最佳选择！Martini 是好你的灵魂。'
          break
        case 'Daiquiri':
          this.text = 'Daiquiri 是好你的灵魂。'
          break
      }
    }
  },
  watch: {
    val (val) {
      this.valcon = this.val
    }
  }
}
</script>

<style>

</style>
