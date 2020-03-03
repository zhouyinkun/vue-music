<template>
    <div class="music-list">
        <div class="back" @click="back">
            <span class="iconback"> 《 </span>
        </div>
        <h1 class="titile">{{title}}</h1>
        <div class="bg-image" :style="bgStyle" ref="bgImage"></div>
        <scroll class="list" ref="list">
            <div class="song-list-wrapper">
                <songList @select="selectItem" :songs="songs"></songList>
            </div>
            <div class="loading-container" v-show="!songs.length">
                <loading />
            </div>
        </scroll>
    </div>
</template>

<script>
import SongList from '@/components/songList'
import Scroll from '@/base/scroll'
import Loading from '@/base/loading'
import {mapActions} from 'vuex'
export default {
    components:{
        SongList,
        Scroll,
        Loading
    },
    props:{
        title:{
            type:String,
            default : ''
        },
        bgImage:{
            type : String,
            default : ''
        },
        songs:{
            type : Array,
            default : []
        }
    },
    computed:{
        bgStyle(){//计算属性中样式绑定:style
            return `background-image:url(${this.bgImage})`
        }
    },
    methods:{
        ...mapActions({
            clickPlay : 'playing/clickPlay'
        }),
        back(){
            this.$router.back()
        },
        selectItem(item,index){
            this.clickPlay({
                list : this.songs,
                index : index
            })  
        },
        
    },
    mounted(){
        this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.music-list
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
    .back
        position absolute
        top 0
        left 6px
        z-index 50
        .iconback
            display block
            padding 10px
            font-size $font-size-large-x
            color : #fff
    .titile
        position absolute
        top 10px
        left 10%
        z-index 40
        width 80%
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        text-align center
        line-hight 40px
        font-size $font-size-large
        color #fff
    .bg-image
        position relative
        width 100%
        height 0
        padding-top 70%
        background-size cover   //背景图片覆盖
        transform-origin top 
    .list 
        position fixed
        top 0
        bottom 0
        width 100%
        background $color-background
        overflow hidden
        .song-list-wrapper
            padding 20px 30px
        .loading-container
            position absolute
            width 100%
            top 50%
            transform translateY(-50%)
</style>