<template>
    <div>
        {{count}}
    </div>
</template>

<script>
    import {state} from "../store";

    export default {
        name: "toUse",
        computed:{
            count(){
                return state.count;
            }
        }
    }
</script>

<style scoped>

</style>
