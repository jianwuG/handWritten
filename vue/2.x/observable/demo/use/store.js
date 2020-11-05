import Vue from 'vue';

export const state = Vue.observable({
    count: 1,
});

export const mutations ={
    updateCount(val){
        state.count=val>0?val:0;
    }
}

