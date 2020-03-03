<template>
  <div id="app">
    <music-header></music-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player />
  </div>
</template>

// <script>
import MusicHeader from '@/components/music-header'
import Tab from '@/components/tab'
import Player from '@/views/player'
export default {
  name: 'App',
  components:{
    MusicHeader,
    Tab,
    Player
  }
}
</script>


