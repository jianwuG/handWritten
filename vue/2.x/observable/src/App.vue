<template>
  <div id="app">
    <div class="use">
        使用observable实现数据管理
        <toUse></toUse>
        <changeUse></changeUse>
    </div>


      <div class="toVuex">
          observable伪装vuex
          <Parent></Parent>
      </div>
  </div>
</template>

<script>
import toUse from '../demo/use/toUse/toUse.vue'
import changeUse from '../demo/use/changeUse/changeUse.vue'
import Parent from '../demo/toVuex/component/parent'
export default {
  name: 'App',
  components: {
      toUse,
      changeUse,
      Parent
  },
    mounted(){
      console.log('2222222222222',this.$gwStore);
    },
    computed: {
        num() {
            return this.$gwStore.states.num;
        },
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
    .use{
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .toVuex{
        height: calc(100vh - 300px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
</style>
