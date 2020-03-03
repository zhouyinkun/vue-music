<template>
    <transition>
        <div class="rank-detail">
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
            return this.$store.state.rank.name
        },
        bgImage(){
            return this.$store.state.rank.coverImgUrl
        }
    },
    mounted(){
        if(!this.$store.state.rank.id){
				this.$router.push('/rank')
        }
        else{
            this.songs = this.recommendDetailSetting(this.$store.state.rank.tracks)
        }
    },
    methods:{
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