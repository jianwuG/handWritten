<template>
   <div>
       <button @click="add">+</button>
       <button @click="reduce">-</button>
   </div>
</template>

<script>
    import {state,mutations} from '../store'
    export default {
        name: "changeUse",
        data(){
            return{

            }
        },
        computed:{
            count:()=>state.count

        },
        methods:{
            updateCount:mutations.updateCount,
            add(){
                this.updateCount(this.count+1);
            },
            reduce(){
                this.updateCount(this.count-1);

            }

        }

    }
</script>

<style scoped>
    button{
        width: 30px;
        height: 20px;
        margin-left: 10px;
    }
</style>
