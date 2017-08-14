import Vue from 'vue';

Vue.filter('formatDate',function(val,format=("YYYY-MM-DD")){

    // 先创建三个不同匹配的正则
    let yReg = /YYYY/i;
    let mReg = /MM/i;
    let dReg = /DD/i;

    // 然后通过val得到相应的时间
    let date = new Date(val);
    let y = date.getFullYear();
    let m = date.getMonth()+1;
    let d = date.getDay();

    return format.replace(yReg,y).replace(mReg,m).replace(dReg,d);
})