<template>
  <div id="app">
    <div>
      <VHeader></VHeader>
      <h2>这是page1页面</h2>
      <router-view></router-view>
      <button @click="gocommon2">gocommon2</button>
      <button @click="gocommon1">gocommon1</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted() {
        Toast({
            message: 'toast提示'
        })
        console.log(process.env)
    },
    methods: {
        gocommon2() {
            this.$router.push({path: 'common2'})
        },
        gocommon1() {
            this.$router.push({path: 'common1'})
        },
        change() {
            this.changeStore('我是')
        }
    }
}
</script>

<style>
* {
  margin-bottom: 20px;
}
#app {
    font-size: 24px;
}
h2 {
	font-size: 26px;
 }
 button {
     font-size: 25px;
     color: #000;
 }
</style>
