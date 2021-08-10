<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo" />
      <MyList :todos="todos" />
      <MyFooter
        :todos="todos"
        @checkAllTodo="checkAllTodo"
        @clearTodo="clearTodo"
      />
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkOne(_, id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) todo.done = !todo.done;
      });
    },
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    updateTodo(id,value) {
      console.log(value);
      this.todos.forEach((todo) => {
        if (todo.id == id) todo.title = value;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // this.$bus.$on('deleteTodo',this.deleteTodo);
    // this.$bus.$on('checkOne',this.checkOne);
    this.subId1 = pubsub.subscribe("deleteTodo", this.deleteTodo);
    this.subId2 = pubsub.subscribe("checkOne", this.checkOne);
    this.$bus.$on('updateTodo',this.updateTodo);
  },
  beforeDestroy() {
    // this.$bus.$off(['deleteTodo','checkOne']);
    pubsub.unsubscribe(this.subId1);
    pubsub.unsubscribe(this.subId2);
    this.$bus.$off('updateTodo');
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: blueviolet;
  border: 1px solid rgb(127, 58, 192);
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>