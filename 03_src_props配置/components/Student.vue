<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>姓名:{{ name }}</h2>
    <h3>年龄:{{ myAge }}</h3>
    <button @click="updateAge">增加年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data: function () {
    return {
      msg: "你好，世界！！！",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //props:['name','age'],

  /* props:{
    name:String,
    age:Number
  } */
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 56,
    },
  },
};
</script>
