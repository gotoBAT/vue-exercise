<template>
  <div class="demo">
     <h2>学校姓名:{{ name }}</h2>
    <h3>学校地址:{{ adress }}</h3>
    <button @click="showName">获取姓名</button>
    <button @click="unbind">解绑</button>
  </div>
</template>

<script>

export default {
  
  name: "School",
  data: function () {
    return {
      name: "山西财经大学",
      adress: "坞城路",
    };
  },
  methods: {
    showName(){
      this.$emit('getName',this.name)
    },
    unbind(){
      this.$off('getName'); //this.$off();  this.$off([])
    }
  }

};
</script>
<style scoped>
.demo{
  background: red;
}
</style>