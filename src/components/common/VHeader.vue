<template>
  <h1>我是公用基础组件header</h1>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '组件common1'
        }
    },
    computed: {
        ...mapState([
            'storeMsg'
        ])
    },
    methods: {
        ...mapMutations([
            'changeStore'
        ]),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 20px;
}
</style>
