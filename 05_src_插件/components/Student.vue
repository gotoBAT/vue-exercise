<template>
  <div>
    <h2>姓名:{{ name }}</h2>
    <h3>年龄:{{ age }}</h3>
    <input v-fbind:value="age" type="text" />
  </div>
</template>

<script>

export default {
  name: "Student",
  data: function () {
    return {
      name: "michael",
      age: 18,
    };
  },

};
</script>
