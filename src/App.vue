<template>
  <div id="app">
<<<<<<< HEAD
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


=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
>>>>>>> 52706da33b5ff74aa2de99384cbf0a450a2ce3a8
