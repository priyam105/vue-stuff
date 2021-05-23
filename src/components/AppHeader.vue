<template>
<div class="ui secondary pointing menu">
    <router-link to='/' class='active item'>Image Logo</router-link>
    <div class="right menu">
    <div v-if="isLoggedIn">
      <router-link to='/' class="ui item">Gallery</router-link>
      <router-link to='/upload' class="ui item">Upload</router-link>
        <a class='ui item' href='#' @click='logout'>Logout</a>
    </div>
    <div v-else> 
        <a class='ui item' href='#' @click="login">Login</a>
    </div>
    </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed:mapGetters(['isLoggedIn'])
};
</script>

<style scoped>
div{
  display: flex;
  flex-direction: row;
}
</style>
