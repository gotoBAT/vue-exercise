<template>
  <div>
    <h2>姓名:{{ name }}</h2>
    <h3>年龄:{{ age }}</h3>
    <button @click="showNmame">查看姓名</button>
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
  methods: {
    showNmame() {
      alert(this.name);
    },
  },
};
</script>
