<template>
  <ul>
      <li>id:{{id}}</li>
      <li>name:{{name}}</li>
  </ul>
</template>

<script>
export default {
name:'Detail',
props:['id','name'],
mounted() {
  console.log(this.$route)
}
}
</script>

<style>

</style>