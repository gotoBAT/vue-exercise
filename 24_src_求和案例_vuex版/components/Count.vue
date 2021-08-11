<template>
  <div>
    <h1>总和:{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementEven">若为偶数则加</button>
    <button @click="incrementWait">等1秒再加</button>
  </div>
</template>


<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementEven() {
      this.$store.dispatch("addEven", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
      
    },
  },
};
</script>

