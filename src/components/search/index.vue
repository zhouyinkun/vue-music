<template>
    <div class="search">
        <div class="search-wrapper">
            <div class="back-btn">
                <i class="back" @click="back"><</i>
            </div>
            <searchBox @query="queryChange" ref="searchBox"></searchBox>
        </div>
        <div class="hot-wrapper" v-show="!query">
            <div class="hot-box">
                <div class="hot-key">
                    <h1 class="title">热门搜索</h1>
                    <ul>
                        <li @click="addQuery(item.k)" class="item" v-for="item in hotkey" :key="item.n">
                            <span>{{item.k}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <searchResult class="search-result" :query="query" v-show="query"></searchResult>
    </div>
</template>

<script>
import SearchBox from '@/base/searchBox'
import {getHotKey} from '@/api/QQsearch'
import SearchResult from '@/components/searchResult'

export default {
    data(){
        return{
            hotkey : [],
            query : ''
        }
    },
    components:{
        SearchBox,
        SearchResult
    },
    mounted(){
        this._getHotKey()
    },
    methods:{
        back(){
            this.$router.back()
        },
        _getHotKey(){
            getHotKey().then(res=>{
                if(res.code === 0){
                    this.hotkey = res.data.hotkey.slice(0,10)
                }
            })
        },
        queryChange(query){
            this.query = query
        },
        addQuery(query){
            //this.$refs.SearchBox获取Box组件中的setQuery方法
            this.$refs.searchBox.setQuery(query)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.search
    position fixed
    z-index 100
    top 0
    bottom 0
    width 100%
    background $color-background
    .search-wrapper
        padding 10px 40px
        background $color-theme
        .back-btn
            position absolute
            top 3px
            left 6px
            z-index 50
            .back
                display block
                padding 9px
                font-size $font-size-large-x
                color #fff
    .hot-wrapper
        position relative
        margin 0 auto
        .hot-box
            height 100%
            overflow hidden
            .hot-key
                margin 0 20px 20px 20px
                .title
                    margin 20px 0
                    font-size $font-size-medium
                    color $color-text
            .item
                padding 5px 10px
                margin 0 20px 10px 0
                border-radius 5px
                border 0.8px solid #c7c7c7
                font-size $font-size-medium
                color $color-text
                display inline-block
        .search-result
            position fixed
            top 45px
            bottom 0
            width 100%
</style>