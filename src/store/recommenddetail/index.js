const state = {
    recommend : {},
};

const actions = {

};

const mutations = {//状态管理的方法一般都大写
    SET_RECOMMEND(state,recommend){
        state.recommend = recommend
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations
}