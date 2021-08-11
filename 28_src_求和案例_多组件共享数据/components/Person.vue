<template>
  <div>
      <h3>Count组件求和:{{sum}}</h3>
    <input
      type="text"
      placeholder="请输入人名"
      v-model="name"
      @keyup.enter="add"
    />
    <ul>
      <li v-for="person in getPersons" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import {mapState } from "vuex"
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    getPersons() {
      return this.$store.state.personList;
    },
    ...mapState(['sum'])
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADDPERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>