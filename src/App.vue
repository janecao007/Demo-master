<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/start">start</router-link> |
      <router-link to="/learning">learning</router-link> |
      <router-link to="/pictureList">pictureList</router-link> |
      <router-link to="/storeListImages">storepic</router-link> |
<<<<<<< HEAD
      <router-link to="/elementUiTable">elementUiTable</router-link> |
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
      <router-link to="/listimg">图片展示</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
