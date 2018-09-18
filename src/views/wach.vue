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
<<<<<<< HEAD
    <p>{{janefun(this.myobj)}}</p>
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
  </div>
</template>

<script>
<<<<<<< HEAD
import {arrfun} from '@/components/js/index'
import { abc } from '../components/js/index'
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
export default {
  data () {
    return {
      val: '',
      title: '',
      valcon: '',
      text: '',
<<<<<<< HEAD
      myobj: {
        name: 'jane',
        age: '28'
      },
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
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
<<<<<<< HEAD
      reducearr: Number,
      janearr: []
    }
  },
  created () {
    this.objfor()
    this.testcontinue()
=======
      reducearr: Number
    }
  },
  created () {
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
    this.reducefun()
    this.mapfun()
    this.foreachfun()
    this.filterfun()
    this.arrdis(this.val1, this.val2)
    this.forofun()
<<<<<<< HEAD
    this.foreachtwo()
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
  },
  methods: {
    arrdis (val1 = 3, ...val2) {
      console.log(val2)
    },
<<<<<<< HEAD
    janefun (object) {
      var values = []
      for (var property in object) {
        values.push(object[property])
      }
      return values
    },
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
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
<<<<<<< HEAD
    testcontinue () {
      for (var i = 0; i < 10; i++) {
        if (i === 5) continue
        if (i === 8) break
        console.log(i)
      }
    },
    objfor () {
      var person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue'
      }
      // var arr = ['111', '2222']
      for (let key in person) {
        console.log(person[key])
      }
    },
    mapfun () {
      const arr = [11, 22, 44, 55, 66, 77]
      this.maparr = arr.map((val) => { return val * 5 })
      for (let i of arr) {
        console.log(i)
      }
=======
    mapfun () {
      const arr = [1, 2, 4, 5, 6, 7]
      this.maparr = arr.map((val) => { return val * 5 })
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
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
<<<<<<< HEAD
    foreachtwo () {
      arrfun.foreachfun()
      arrfun.TextTrackList()
      abc()
    },
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
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
