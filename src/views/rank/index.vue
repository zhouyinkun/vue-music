<template>
  <transition>
    <div class="rank">
      <Scroll class="topList">
      <div>
          <ul>
          <li @click="selectItem(item)" v-for="item in rankList" :key="item.id" class="item">
            <div class="icon">
              <img :src="item.coverImgUrl" width="100" height="100" alt="">
            </div>
            <ul class="song-list">
              <li class="song" v-for="(song,index) in item.rank" :key="index">
                <span>{{index+1}}</span>
                <span>{{song.name}} - {{song.ar[0].name}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="loading-content" v-if="!rankList.length">
          <loading></loading>
      </div>
        <router-view></router-view>
      </Scroll>
    </div>
  </transition>
</template>


<script>
  import Loading from '@/base/loading'
  import Scroll from '@/base/scroll'
  import RankDetail from '@/components/rankDetail'
  const RANK_NUMBER = [0,1,2,3,4,22,23]
  export default {
    name: "rank",
    data() {
      return {
        rankList: [],
      }
    },
    components: {
      Scroll,
      Loading,
      RankDetail
    },
    mounted(){
      for(let i=0;i<RANK_NUMBER.length;i++){
        this.axios.get('http://localhost:3000/top/list?idx='+RANK_NUMBER[i]).then(res=>{
            let list = res.data.playlist
            this.rankList.push(list)
            //显示前3条歌曲数据
            list.rank = res.data.playlist.tracks.slice(0,3)
          })
      }
      
    },
    methods:{
      selectItem(item){
        this.$store.state.rank = item
        this.$router.push({
          path : `rank/${item.id}`
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
//过长动画
.v-enter-active,.v-leave-active
  transition all 0.3s
.v-enter,.v-leave
  transform translate3d(50%,0,0)
  opacity : 0

//rank样式
.rank
  position fixed
  top 88px
  bottom 0
  width 100%
  .topList
    height 100%
    padding-bottom 5px
    overflow hidden //防止划动到顶部导航
    .item
      display flex  //弹性布局
      margin 0 10px
      padding 3px 0
      border-bottom 1px solid #e4e4e4
      .icon
        flex 0 0 100px  //类似浮动让字体往左
        height 100%
        width 100%
      .song-list
        flex 1
        display flex  //竖直加弹性布局加后面两句话
        flex-direction column
        justify-content center  //让字体居中
        padding 0 20px
        height 100px
        color $color-text
        font-size $font-size-small
        .song
          line-height 30px
          //让过长字体隐藏
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          span 
            margin-left 5px
</style>