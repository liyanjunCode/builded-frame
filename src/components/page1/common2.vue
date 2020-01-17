<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{storeMsg}}</p>
    <p>
      For a guide and recipes on 组件common2
    </p>
    <h3>组件common2</h3>
    <br>
    <br>
    <br>
    <button @click="changeStore('组件2改变vuex状态数据')">组件1更改状态管理数据</button>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '组件common2'
        }
    },
    computed: {
        ...mapState([
            'storeMsg'
        ])
    },
    mounted() {

    },
    methods: {
        ...mapMutations([
            'changeStore'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin-bottom: 20px;
}
.hello {
  font-size: 26px; 
}
</style>
