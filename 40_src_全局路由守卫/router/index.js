// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";

import Detail from "../pages/Detail";

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
          meta: { isAuth: true },
        },
        {
          path: "message",
          component: Message,
          meta: { isAuth: true },
          children: [
            {
              name: "xiangqing",
              path: "detail",
              component: Detail,
              //对象写法
              // props:{a:'zhangsan',b:'hello'}
              //布尔值写法
              // props:true,
              //函数写法
              props($route) {
                return {
                  id: $route.query.id,
                  name: $route.query.name,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem("name") === "michael") next();
    else alert("没有权限");
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  document.title = to.meta.title || "系统";
});

export default router;
