<template>
  <div>
    <h2 @click="showName">姓名:{{ name }}</h2>
    <h3>年龄:{{ age }}</h3>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
  name: "Student",
  data: function () {
    return {
      name: "michael",
      age: 18,
    };
  },
  mixins:[mixin]
};
</script>
