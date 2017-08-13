<template>
  <main>
    <v-header>
    </v-header>
    <router-link to='/index'>
      <span>index</span>
    </router-link>
    <router-link to='/news'>
      <span>news</span>
    </router-link>
    <router-link to='/sports'>
      <span>sports</span>
    </router-link>
    <router-link to='/videos'>
      <span>videos</span>
    </router-link>
  
    <router-view>
    </router-view>
  
    <v-footer>
    </v-footer>
  </main>
</template>

<script>
import Cheader from './home/header.vue'
import Cfooter from './home/footer.vue'


export default {
  components: {
    'v-header': Cheader,
    'v-footer': Cfooter,
  }
}
</script>

