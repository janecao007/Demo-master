<template>
  <div>
    <p>{{revermsg}}</p>
    <p>{{reverse()}}</p>
    <p>{{now}}</p>
    <p>{{fullname}}</p>
    <p>{{fullname2}}</p>
    <div>
      <input type="text" v-model="question">
      <p>{{question}}</p>
    </div>
  </div>
</template>

<script>
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
  methods: {
    reverse () {
      return this.message.split('').reverse().join('')
    }
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
