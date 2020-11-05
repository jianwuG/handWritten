<template>
    <div class="list">
        <div v-for="(item,index) in list" class="list-item">
            <div class="item-name">{{item.name}}</div>
            <div class="item-price">价格：{{item.price}}rmb/数量：{{item.buyNum}}</div>
            <div class="item-btn">
                <button @click="addAuctionNum(item.id)">+</button>
                <button @click="reduceAuctionNum(item.id)">-</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "father",
        data() {
            return {}
        },

        computed: {
            list() {
                return this.$gwStore.states.list
            },
            selectInfo() {
                return this.$gwStore.states.selectInfo
            }

        },
        mounted() {
            let list=[];
            setTimeout(() => {
                list=[{
                    'name': '商品1',
                    'id': 1,
                    'price': 55
                }, {
                    'name': '商品2',
                    'id': 2,
                    'price': 22

                }, {
                    'name': '商品3',
                    'id': 3,
                    'price': 77
                }];
                list.map(item=>Vue.set(item,'buyNum',0));
                this.$gwStore.update('list', list);
            }, 100);
        },
        methods:{
            addAuctionNum(id){
              let selectItem=this.list.find(selfItem=>selfItem.id===id);
              if(selectItem){
                   selectItem.buyNum++;
              }

                this.$gwStore.commit('setAuctionNum',this.list)
                // this.$gwStore.commit('setAuctionNum')
            },
            reduceAuctionNum(id){
                let selectItem=this.list.find(selfItem=>selfItem.id===id);
                if(selectItem){
                    selectItem.buyNum>0?selectItem.buyNum--:0;
                }
                this.$gwStore.commit('setAuctionNum',this.list)
            },
        }
    }
</script>

<style scoped>
    .list {
        width: 100%;
    }

    .list-item {
        width: calc(100% - 40px);
        height: 60px;
        border: 1px #ccc solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .item-btn button{
        margin-left: 8px;
    }
</style>
