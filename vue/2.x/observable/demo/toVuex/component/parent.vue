<template>
  <div class="parent">
      111
      <Father></Father>
      <Son></Son>
  </div>
</template>

<script>
    import Father from './father'
    import Son from './son'
    export default {
        name: "parent",
        components:{
            Father,
            Son
        }
    }
</script>

<style scoped>
 .parent{
     width: 100%;
 }
</style>
