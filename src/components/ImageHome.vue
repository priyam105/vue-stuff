<template>
  <div>
    Welcome to Image Home
    
    <div class="ui three column grid">
  <div class="column" v-for="img in getAllImages" :key="img.id">
    <div class="ui segment">
      <img :src="img.link" style="width:380px;height:380px;">
    </div>
  </div>

    <!-- <ul >
      <li v-for="img in getAllImages" :key="img.id">
      <img :src="img.link" style="width:380px;height:380px;"/>
      </li>
    </ul> -->
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'ImageHome',
  computed:mapGetters(['getAllImages']),
  methods:mapActions(['fetchImages']),
  created()
  {
    this.fetchImages();
  }
}
</script>
