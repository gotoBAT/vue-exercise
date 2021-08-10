<template>
  <div>
    <Student :getStudentName="getStudentName"></Student>
    <hr />
    <!-- <School @getName="getSchoolName"></School> -->
    <School ref="school"></School>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  methods: {
    getStudentName(value) {
      console.log(value);
    },
    getSchoolName(value) {
      console.log(value);
    },
  },
  mounted() {
      this.$refs.school.$on("getName", this.getSchoolName);
  },
};
</script>