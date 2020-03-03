<template>
  <transition>
    <div class="singer">
      <singer-list :data="singerList" @select="selectSinger"></singer-list>
			<router-view></router-view>
      <div class="loading-content" v-if="!singerList.length">
          <loading></loading>
        </div>
    </div>
  </transition>
</template>

<script>
import jsonp from '@/common/js/jsonp'
import {params,options} from "./config"
import Scroll from '@/base/scroll'
import Loading from '@/base/loading'
import SingerList from '@/components/singerList'

import {mapMutations} from 'vuex'

const HOT_NAME = '热门'
const HOT_NAME_LENGTH = 10

const pinyin = require('pinyin')
export default {
  name : "singer",
  data(){
    return{
      singerList : []
    }
  },
  computed:{//计算属性，给24字母
    scrollList(){
      return this.singerList.map((item)=>{
        return item.title.substr(0,1)
      })
    }
  },
  components: {
      SingerList,
      Loading
  },
  mounted(){
    // this.getSingerList().then(res=>{
    //   if(res.code === 0){
    //     this.singerList = this.singerListSettings(res.data.list)
    //   }
    // })
    this.getSingerList()
  },
  methods:{
    selectSinger(singer){
      this.$router.push({
        path : `/singer/${singer.id}`
      })
      this.$store.state.singer = singer
    },
    /*getSingerList(){
      const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
      const data = Object.assign({},params,{
        g_tk: 1664029744,
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
      })
      return jsonp(url,data,options)
    },*/
    getSingerList(){
      const url = 'http://localhost:3000/top/artists?limit=70'
      this.axios.get(url).then(res=>{
        let list = res.data.artists
        list.map(item=>{
          let py = pinyin(item.name[0],{
            style : pinyin.STYLE_FIRST_LETTER
          })
          item.Findex = py[0][0].toUpperCase()
        })
        this.singerList = this.singerListSettings(list)
      })
    },
    singerListSettings(list){
      let page = {//存储普通数据和热门数据
        hot : {
          title : HOT_NAME,
          lists : []
        }
      }
      list.forEach((item,index)=>{
        if(index < HOT_NAME_LENGTH){
          page.hot.lists.push({
            id : item.id,
            name : item.name,
            avatar : item.img1v1Url
          })
        }
        const key = item.Findex
        if(!page[key]){//存放普通数据
          page[key] = {
            title : key,
            lists : []
          }
        }
        page[key].lists.push({
          id : item.id,
          name : item.name,
          avatar : item.img1v1Url
        })
      })
      //排序
      let hot = []
      let nohot = []
      for(let k in page){
        let value = page[k]
        if(value.title.match(/[a-zA-Z]/)){
          nohot.push(value)
        }else if(value.title === HOT_NAME){
          hot.push(value)
        }
      }
      nohot.sort((a,b)=>{
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(nohot)
    },
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .v-enter-active, .v-leave-active
    transition all 0.3s
  .v-enter, .v-leave-to
    transform translate3d(50%, 0, 0)
    opacity 0

  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>

