<template>
    <scroll class="search-result" :pullup="pullup" @scrollToEnd="searchMore">
        <ul class="search-list">
            <li class="search-item" v-for="item in result" :key="item.id">
                <div class="icon">
                    <i class="icon-music"></i>
                </div>
                <div class="name">
                    <p class="song">{{item.songname}}</p>
                    <p class="singer">{{item.singer[0].name}}</p>
                </div>
            </li>
        </ul>
    </scroll>
</template>

<script>
import {getSearchResult} from '@/api/QQsearch'
import Scroll from '@/base/scroll'

const perpage = 30
export default {
    props:{
        query:{
            type : String,
            default : ''
        },
        showSinger:{
            type : Boolean,
            default : true
        }
    },
    components:{
        Scroll
    },
    data(){
        return{
            result : [],
            page : 1,
            pullup : true
        }
    },
    watch:{
        query(){
            this._getSearchResult()
        }
    },
    methods:{
        _getSearchResult(){
            getSearchResult(this.query,this.page,this.showSinger,perpage).then(res=>{
                if(res.code === 0){
                    this.result = this.searchSetting(res.data)
                }
            })
        },
        searchSetting(data){
            let ret = []
            if(data.song){
                ret = ret.concat(data.song.list)
            }
            return ret
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.search-result
    height 100%
    overflow hidden
    .search-list
        padding-bottom 30px
        .search-item
            display flex
            align-items center
            padding 3px 20px
            height 50px
            border-bottom 1px solid rgb(228,228,228)
            .icon
                flex 0 0 30px
                width 30px
                .icon-music
                    font-size 14px
                    color $color-text-d
            .name
                flex 1
                font-size $font-size-medium
                color $color-text-d
                overflow hidden
                .song
                    font-size $font-size-media-x
                    color $color-text
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    padding-bottom 5px
                .singer
                    font-size 12px
                    color $color-text-g
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis

</style>