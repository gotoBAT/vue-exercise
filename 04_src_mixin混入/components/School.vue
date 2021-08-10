<template>
  <div>
     <h2 @click="showName">学校姓名:{{ name }}</h2>
    <h3>学校地址:{{ adress }}</h3>
  </div>
</template>

<script>

import {mixin} from '../mixin'
export default {
  
  name: "School",
  data: function () {
    return {
      name: "山西财经大学",
      adress: "坞城路",
    };
  },

  mixins:[mixin]
};
</script>
