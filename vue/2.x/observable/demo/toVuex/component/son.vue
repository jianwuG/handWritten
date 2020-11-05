<template>
  <div>
    <div>总件数：{{auctionNum}}</div>
    <div>总价格：{{auctionPrice}}</div>
  </div>
</template>

<script>
    export default {
        name: "son",
        computed:{
            auctionNum(){
                return this.$gwStore.states.auctionNum
            },
            auctionPrice(){
                return this.$gwStore.states.auctionPrice
            },
        }
    }
</script>

<style scoped>

</style>
