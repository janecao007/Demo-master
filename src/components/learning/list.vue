<template>
  <div>
    <ul>
      <li v-for="(item,index) in items" :key="index">{{ item.name+' '+ item.age + ' ' + index}}</li>
    </ul>
    <p>
      additems: <input type="text" v-model="con"> <button @click="pushItem($event)">添加</button>
    </p>
    <p v-for="(item, index) in objitems" :key="index">{{ item }}</p>
    <p>{{newname}}</p>

    <ul>
      <li v-for="(item, index) in filternum(arrnumbers)" :key="index">{{ item }}</li>
    </ul>

    <p v-for="(n, index) in 10" :key="index">{{ n }}</p>
    <p>{{ add }}</p>
  </div>
</template>

<script>
// push() pop() shift() unshift() splice() sort() reverse()
export default {
  data () {
    return {
      con: '',
      newname: '',
      items: [
        {
          name: 'cao',
          age: 19
        },
        {
          name: 'zhou',
          age: 89
        }
      ],
      objitems: {
        name: 'hellen',
        age: 22
      },
      arrnumbers: [5, 4, 2, 1],
      a: 2,
      b: 3
    }
  },
  methods: {
    pushItem ($event) {
      this.items.push({
        name: this.con,
        age: this.con
      })
    },
    filternum (num) {
      return num.filter(function (val) {
        return val % 2 === 0
      })
    }
  },
  computed: {
    add () {
      return this.a + this.b
    }
  }
}
</script>

<style>

</style>
