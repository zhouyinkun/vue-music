<template>
  <scroll
    class="singer-list"
    :data="data"
    ref="singerList"
    :listenScroll="listenScroll"
    @scroll="scroll"
    :probeType="probeType"
  >
    <ul>
      <li v-for="list in data" class="list" ref="list" :key="list.id"> 
        <h1 class="list-title">{{list.title}}</h1>
        <ul>
          <li v-for="item of list.lists" class="list-item" @click="selectItem(item)" :key="item.id">
            <img v-lazy="item.avatar" class="avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div
      class="list-scroll"
      @touchstart="scrollTouchStart"
      @touchmove.stop.prevent="scrollTouchMove"
    >
    <!-- .stop.prevent阻止原生的 -->
      <ul>
        <li
          class="item"
          v-for="(item,index) of scrollList"
          :data-index="index"
          :class="{'currentIndex':currentIndex===index}" :key="index"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '@/base/scroll'
  import {getIndex} from "common/js/dom";

  export default {
    name: "singer-list",
    data() {
      return {
        scrollY: -1,
        currentIndex: 0
      }
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    created() {
      this.touch = {}
      this.listenScroll = true
      this.listHeight = []
      this.probeType = 3
    },
    computed: {
      scrollList() {
        return this.data.map((item) => {
          return item.title.substr(0, 1)
        })
      }
    },
    methods: {
			selectItem(item){
				this.$emit('select',item)
			},
      scrollTouchStart(e) {
        let targetIndex = getIndex(e.target, 'index')
        let firstPlace = e.touches[0]
        this.touch.one = firstPlace.pageY
        this.touch.targetIndex = targetIndex
        this.$refs.singerList.scrollToElement(this.$refs.list[targetIndex], 0)
      },
      scrollTouchMove(e) {
        let firstPlace = e.touches[0]
        this.touch.two = firstPlace.pageY
        let delta = (this.touch.two - this.touch.one) / 18 | 0
        let targetIndex = parseInt(this.touch.targetIndex) + delta
        this.$refs.singerList.scrollToElement(this.$refs.list[targetIndex], 0)
      },
      scroll(place) {
        this.scrollY = place.y
      },
      _countHeight() {
        this.listHeight = []
        const list = this.$refs.list
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    components: {
      Scroll
    },
    watch: {
      data() {
        setTimeout(() => {
          this._countHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight

        if (newY>0){
          this.currentIndex = 0
          return
        }

        for (let i = 0; i < listHeight.length; i++) {
          let heightMax = listHeight[i + 1]
          let heightMin = listHeight[i]
          if (!heightMax || -newY >= heightMin && -newY < heightMax) {
            this.currentIndex = i
            return
          }
        }
        this.currentIndex = 0
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable"
  .singer-list
    position relative
    width 100%
    height 100%
    overflow hidden
    background $color-background

    .list
      .list-title
        height 25px
        padding-left 13px
        margin-bottom 9px
        font-size $font-size-small
        color white
        line-height 25px
        background rgba(0, 0, 0, 0.1)

      .list-item
        display flex
        align-items center
        margin 0 5px
        padding 5px 0
        border-bottom 1px solid rgba(0, 0, 0, 0.1)

        &:last-child
          border none
          margin-bottom 10px

        .avatar
          width 50px
          height 50px
          border-radius 3px

        .name
          font-size $font-size-medium
          margin-left 20px
          color $color-text

    .list-scroll
      position absolute
      z-index 30
      right 3px
      top 50%
      transform translateY(-50%)
      width 20px
      padding 200px 0
      border-radius 3px
      text-align center

      .item
        padding 5px
        line-height 1
        color $color-text-g
        font-size $font-size-small
        font-weight bold
        &.currentIndex
          color $color-theme
</style>
