<template>
  <div>
    <h1>vue生命周期</h1>
    <p>{{message}}</p>
    <p>{{mapfun()}}</p>
    <p>{{foreachfun()}}</p>
    <p>{{filterfun()}}</p>
    <p>{{arrjoin()}}</p>
    <p>{{sortarr([2,3,1,0,8,18,6,9])}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'vue生命周期消息',
      edit: true,
      status: 1
    }
  },
  created () {
    this.returntest()
    this.oneevent()
    this.forevent()
    this.chanage()
  },
  methods: {
    sortarr (arr) {
      return arr.sort((a, b) => {
        return a - b
      })
    },
    arrjoin () {
      let arr4 = ['jane', 'cao']
      // let arrstr = arr4.join(' ')
      return arr4.join(' ')
    },
    filterfun () {
      let arr3 = [1111, 2222, 2, 3, 4]
      let newarr3 = arr3.filter((v) => {
        return v < 2
      })
      return newarr3
    },
    mapfun () {
      let arr = [1, 2, 3]
      let newarr = arr.map((v) => {
        return v * 2
      })
      console.log(arr)
      console.log(newarr)
    },
    foreachfun () {
      let arr2 = [1, 2, 3, 4]
      let result = 0
      arr2.forEach((v) => {
        result += v
      })
      console.log(result)
    },
    chanage () {
      let a = true
      if (a) {
        this.edit = false
        this.status = Boolean(this.status)
      }
      console.log(this.edit)
      console.log(this.status)
    },
    oneevent () {
      console.log('oneevent')
    },
    returntest () {
      let a = true
      let b = 1
      if (a) {
        console.log(a)
        return false
      }
      console.log(b)
      this.oneevent()
    },
    forevent () {
      for (let i = 0; i < 10; i++) {
        if (i === 2) return
        console.log(i)
      }
    }

  }
  // beforeCreate () {
  //   console.log('beforeCreate创建之前')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // created () {
  //   console.log('created创建后')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // beforeMount () {
  //   console.log('beforeMount载入之前')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // mounted () {
  //   console.log('mounted载入后')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // beforeUpdate () {
  //   console.log('更新之前')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // updated () {
  //   console.log('更新之后')
  //   console.log(this.message)
  //   console.log(this.$el)
  // }
  // beforeDestroy () {
  //   console.log('销毁之前')
  //   console.log(this.message)
  //   console.log(this.$el)
  // },
  // destroyed () {
  //   console.log('销毁后')
  //   console.log(this.message)
  //   console.log(this.$el)
  // }
}
</script>

<style>

</style>
