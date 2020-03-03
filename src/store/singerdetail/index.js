const state = {
    singer : {},
};

const actions = {
    click(){
        console.log("1111");
        
    }
};

const mutations = {//状态管理的方法一般都大写
    SET_SINGER(state,singer){
        state.singer = singer
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations,
}