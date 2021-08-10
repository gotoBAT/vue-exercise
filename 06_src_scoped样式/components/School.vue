<template>
  <div class="demo">
     <h2>学校姓名:{{ name }}</h2>
    <h3>学校地址:{{ adress }}</h3>
    <input v-fbind:value="name" type="text" />
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

};
</script>
<style scoped>
.demo{
  background: red;
}
</style>