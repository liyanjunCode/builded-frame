<template>
  <div id="app">
    <VHeader></VHeader>
    <img alt="Vue logo" src="~assets/img/logo.png">
    <p>页面page2</p>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from 'components/HelloWorld'
export default {
    name: 'app',
    mounted() {
        this.aa()
    },
    methods: {
        aa() {
            console.log(222222222)
        }
    },
    components: {
        Hello
    }
}
</script>

<style>
* {
  margin-bottom: 20px;
  text-align: center;
}
p {
  transform: scale(1);
  font-size: 24px;
}
</style>
