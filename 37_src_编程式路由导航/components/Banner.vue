<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="backTo">后退</button>.
    <button @click="forwardTo">前进</button>
    <button @click="goTo">go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    backTo() {
      this.$router.back();
    },
    forwardTo() {
      this.$router.forward();
    },
    goTo() {
      this.$router.go(1);
    },
  },
};
</script>