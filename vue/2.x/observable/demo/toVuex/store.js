import Vue from 'vue'

export default class Store {
    constructor({states,actions,mutations}){
        this.states=Vue.observable(states)||{};
        this.actions=Vue.observable(actions)||{};
        this.mutations=Vue.observable(mutations)||{};
    }
    commit=(fun,options)=>{
        if (fun) {
            this.mutations[fun].call(this, options);
        } else {
            return false;
        }
    };
    dispatch=(fun,options)=>{
        if (fun) {
            this.actions[fun].call(this, options);
        } else {
            return false;
        }
    };
    update =(key,value)=>{
        if (key) {
            this.states[key]=value;
        }
    };
}
