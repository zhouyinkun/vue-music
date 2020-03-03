<template>
    <transition>
        <musicList :songs="songs" :title="title" :bgImage="bgImage"></musicList>
    </transition>
</template>

<script>
import { params,options } from '@/views/singer/config';
import {settingSong} from '@/common/js/song.js'
import jsonp from '@/common/js/jsonp'
import MusicList from '@/components/musicList'
export default {
    data(){
        return{
            songs : []
        }
    },
    components : {
        MusicList
    },
    computed:{
        title(){
            return this.$store.state.singer.name
        },
        bgImage(){
            return this.$store.state.singer.avatar
        }
    },
    created(){
        this._getSingerDetail()
    },
    methods:{
        _getSingerDetail(){
			if(!this.$store.state.singer.id){
				this.$router.push('/singer')
            }
            else{
                var url = `http://localhost:3000/artists?id=${this.$store.state.singer.id}`
                this.axios.get(url).then((res)=>{
                    if(res.status === 200){
                        this.songs = this._singerDetailSettings(res.data.hotSongs)
                    }
                })
            }
		},
		_singerDetailSettings(list){
			let result = []
			list.forEach((item)=>{
				result.push(settingSong(item))
			})
			return result
        },
        
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.v-enter-active,.v-leave-active
    transition : all 0.3s
.v-enter,.v-leave
    transform translate3d(50%,0,0)
</style>