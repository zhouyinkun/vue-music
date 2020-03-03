<template>
    <div class="song-list">
        <ul>
            <li class="item" @click="selectItem(song,index)" v-for="(song,index) in songs" :key="song.id">
                <div class="list">
                    <h2 class="name">{{song.name}}</h2>
                    <p class="desc">{{getDesc(song)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        songs:{
            type : Array,
            default : []
        }
    },
    methods:{
        getDesc(song){
            return `${song.singer} . ${song.album}`
        },
        selectItem(item,index){
            this.$emit('select',item,index)//监听select事件，传递item,index值
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.song-list
    .item
        display flex
        align-items center
        box-sizing border-box
        height 64px
        font-size $font-size-medium
        border-bottom 1px solid #ccc
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        .list
            display 1
            line-height 20px
            overflow hidden
            .name
                color $color-text
            .desc
                color $color-text-d
                margin-top 4px
</style>