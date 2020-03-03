<template>
    <div class="search-box">
        <input type="text" class="box" :placeholder="placeholder" v-model="query">
        <i v-show="query" class="icon-delete" @click="clear"></i>
    </div>
</template>

<script>
export default {
    data(){
        return{
            query : ''
        }
    },
    props:{
        placeholder:{
            type : String,
            default : '搜索歌曲、搜索歌手'
        }
    },
    created(){
        this.$watch('query',(newValue)=>{
            this.$emit('query',newValue)
        })
    },
    methods:{
        clear(){
            this.query = ''
        },
        setQuery(query){
            this.query = query
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 25px
    .box
        flex 1
        line-height 25px
        background $color-theme
        color #fff
        font-size $font-size-medium
        border none
        outline none 
        border-bottom 1px solid rgb(235,235,235)
        &::placeholder//设置字体
            color rgba(255,255,255,0.6)
    .icon-delete
        position absolute
        right 12px
        font-size 14px
        color rgba(255,255,255,0.8)
</style>