<template>
  <div>
    <h1>总和:{{ he }}</h1>
    <h1>总和10倍:{{ $store.getters.bigSum }}</h1>
    <h1>我是{{ mingzi }},今年{{ nianling }}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementEven">若为偶数则加</button>
    <button @click="incrementWait">等1秒再加</button>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations} from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState({he:'sum',mingzi:'name',nianling:'age'}),
    // ...mapState(["sum", "name", "age"]),
    ...mapGetters(["bigSum"]),
    // ...mapGetters({dashuzi:'bigSum'}),
  },
  methods: {
    /* increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    ...mapMutations({increment:'ADD',decrement:'JIAN'}),
    incrementEven() {
      this.$store.dispatch("addEven", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
};
</script>

