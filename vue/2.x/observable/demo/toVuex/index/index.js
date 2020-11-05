import Store from '../store'
const states={
   num:1,
    list:[],
    selectInfo:[],
    auctionNum:0,
    auctionPrice:0,
};
const actions={


};
const mutations={
    setAuctionNum(info){
        let sum=0;
        let price=0;
        info.forEach((item,index)=>{
            sum=sum+item.buyNum;
            price=price+item.buyNum*item.price
        });
        this.states.auctionNum=sum;
        this.states.auctionPrice=price;
    }
};
const store = new Store({
    states,
    actions,
    mutations,
});

export default store;

