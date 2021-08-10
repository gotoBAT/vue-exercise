<template>
  <div>
    <Student name="michael" :age="18"></Student>
    <hr />
    <Student name="durant" :age="25"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  data() {
    return {
      msg: "你好阿",
    };
  },
  components: {
    Student,
  },
};
</script>