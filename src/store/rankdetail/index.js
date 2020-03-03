const state = {
    rank : {},
};

const actions = {

};

const mutations = {//状态管理的方法一般都大写
    SET_RANK(state,rank){
        state.rank = rank
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations
}