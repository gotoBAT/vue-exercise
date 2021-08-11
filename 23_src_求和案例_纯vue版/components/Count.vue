<template>
  <div>
    <h1>总和:{{ sum }}</h1>
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
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementEven() {
      if (this.n % 2 == 0) this.sum += this.n;
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>

