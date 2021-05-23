<template>
  <div>
    <h2>Please wait...</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    let qr = new URLSearchParams(window.location.hash);
    let tokenArr = [];
    for (let q of qr.entries()) {
      tokenArr.push(q[1]);
    }
    //console.log(tokenArr[0]);
    this.finalizeLogin(tokenArr[0]);
  }
};
</script>
