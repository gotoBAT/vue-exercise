<template>
  <ul>
      <li>id:{{$route.params.id}}</li>
      <li>name:{{$route.params.name}}</li>
  </ul>
</template>

<script>
export default {
name:'Detail',
mounted() {
  console.log(this.$route)
}
}
</script>

<style>

</style>