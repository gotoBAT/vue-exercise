<template>
  <div class="demo">
    <h2>姓名:{{ name }}</h2>
    <h3>年龄:{{ age }}</h3>
    <button @click="showName">获取姓名</button>
    <button @click="sendName">发送姓名</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data: function () {
    return {
      name: "michael",
      age: 18,
    };
  },
  props: ["getStudentName"],
  methods: {
    showName() {
      this.getStudentName(this.name);
    },
    sendName() {
      // this.$bus.$emit('getSName',this.name);
      pubsub.publish("getSName", this.name);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  background: blueviolet;
}
</style>
