<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2 v-text="msg" ref="title"></h2>
    <button ref="btn" @click="showDOM">输出dom</button>
    <School ref="sch"></School>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
import School from "./components/School";

import Student from "./components/Student";

export default {
  name: "App",
  data() {
    return {
      msg:"你好阿"
    }
  },
  components: {
    School,
    Student,
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
};
</script>

<style>
/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
