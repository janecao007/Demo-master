<template>
  <div>
    <h1>计算属性 <slot name="addtitle"></slot></h1>
    <p>{{revermsg}}</p>
    <p>{{reverse()}}</p>
    <p>{{now}}</p>
    <p>{{fullname}}</p>
    <p>{{fullname2}}</p>
    <div>
      <input type="text" v-model="question">
      <p>{{question}}</p>
    </div>
    <p>{{letfun()}}</p>
    <p>{{storecon}}</p>
  </div>
</template>

<script>
import { componentzj } from './components.vue'
export default {
  data () {
    return {
      msg: 'janecao',
      message: 'zhencao',
      firstname: 'cao',
      lastname: 'zhen',
      question: ''
    }
  },
  created () {
    // this.letfun()
  },
  methods: {
    reverse () {
      return this.message.split('').reverse().join('')
    },
    letfun () {
      let arr1 = [1, 2]
      let arr2 = [...arr1, 3]
      console.log(arr2)
      let [x = 1] = [undefined]
      console.log(x)
      // return [x, y]
      // let temp
      // console.log(temp)
      // temp = 123
      // console.log(temp)
      // for (let i = 0; i < 10; i++) {
      //   let i = 'abc'
      //   console.log(i)
      // }
      let onefun = () => {
        console.log('111')
      }
      onefun()
    }
  },
  components: {
    componentzj
  },
  computed: {
    revermsg () {
      return this.msg.split('').reverse().join('')
    },
    now () {
      return Date.now()
    },
    fullname () {
      return this.firstname + ' ' + this.lastname
    },
    storecon () {
      return this.$store.state.count + 10
    },
    fullname2: {
      get () {
        return this.firstname + ' ' + this.lastname
      },
      set (newvalue) {
        let names = newvalue.split(' ')
        this.firstname = names[0]
        this.lastname = names[names.length - 1]
      }
    }
  }
}
</script>

<style>

</style>
