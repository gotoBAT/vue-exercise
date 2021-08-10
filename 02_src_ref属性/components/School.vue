<template>
  <div class="bg-color">
    <h2>学校名称:{{ name }}</h2>
    <h3>学校地址:{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data: function () {
    return {
      name: "山西财经大学",
      address: "山西太原",
    };
  },
};
</script>

<style>
.bg-color {
  background: blueviolet;
}
</style>