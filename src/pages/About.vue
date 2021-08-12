<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* beforeDestroy() {
			console.log('About组件即将被销毁了')
		},*/
  /* mounted() {
			console.log('About组件挂载完毕了',this)
			window.aboutRoute = this.$route
			window.aboutRouter = this.$router
		},  */
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "michael") next();
      else alert("没有权限");
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("通过路由规则离开组件");
    next();
  },
};
</script>