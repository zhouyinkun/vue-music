const state = {
    playing : false,//是否播放
    fullScreen : false,//是否全屏
    playlist : [],//播放列表
    sequenceList : [],
    playMode : 0,    //播放模式
        
    currentIndex : -1//播放歌曲索引
};

const actions = {
    clickPlay({commit,state},{list,index}){
        commit('SET_SEQUENCELIST',list),
        commit('SET_PLAYLIST',list)
        commit('SET_CURRENTINDEX',index),
        commit('SET_FULLSCREEN',true),
        commit('SET_PLAYING',true)
    }
};

const mutations = {//状态管理的方法一般都大写
    SET_PLAYING:(state,flag)=>{
        state.playing = flag
    },
    SET_FULLSCREEN:(state,flag)=>{
        state.fullScreen = flag
    },
    SET_PLAYLIST:(state,list)=>{
        state.playlist = list
    },
    SET_SEQUENCELIST:(state,list)=>{
        state.sequenceList = list
    },
    SET_PLAYMODE:(state,mode)=>{
        state.playMode = mode
    },
    SET_CURRENTINDEX:(state,index)=>{
        state.currentIndex = index
    },
};

const getters = {
    getPlaylist : state =>{
        return state.playlist
    },
    getFullScreen : state =>{
        return state.fullScreen
    },
    getCurrentIndex : state =>{
        return state.currentIndex
    },
    getPlayMode : state =>{
        return state.playMode
    },
    getPlaying : state =>{
        return state.playing
    },
    getSequenceList : state =>{
        return state.sequenceList
    },
    getcurrentSong : (state)=>{
        return state.playlist[state.currentIndex] || {}
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}