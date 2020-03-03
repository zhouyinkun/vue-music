<template>
    <transition>
        <div class="recommend-detail">
            <musicList :songs=songs :title="title" :bg-image="bgImage"></musicList>
        </div>
    </transition>
</template>

<script>
import MusicList from '@/components/musicList'
import {settingSong} from '@/common/js/song'
export default {
    data(){
        return{
            songs : []
        }
    },
    components:{
        MusicList
    },
    computed:{
        title(){
            return this.$store.state.recommend.name
        },
        bgImage(){
            return this.$store.state.recommend.picUrl
        }
    },
    mounted(){
        if(!this.$store.state.recommend.id){
				this.$router.push('/recommend')
        }
        else{
            this.getRecommendDetail(this.$store.state.recommend.id).then(res=>{
                this.songs = this.recommendDetailSetting(res.data.playlist.tracks)
            })
        }
    },
    methods:{
        getRecommendDetail(id){
            const url = `http://localhost:3000/playlist/detail?id=${id}`
            return this.axios.get(url);
        },
        recommendDetailSetting(list){
            let result =[]
            list.forEach(musicData=>{
                result.push(settingSong(musicData))
            })
            return result
        },
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.v-enter-active,.v-leave-active
    transition all 0.5s
.v-enter,.v-leave-to
    transform translate3d(50%,0,0)
    opacity 0
</style>