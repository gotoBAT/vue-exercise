<template>
  <li>
    <label @change="handleCheck(todo.id)">
      <input type="checkbox" :checked="todo.done" />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        @blur="blurMethod(todo, $event)"
        :value="todo.title"
        ref="editInput"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleDelete(id) {
      if (confirm("Are you sure you want to delete"))
        // this.$bus.$emit('deleteTodo',id);
        pubsub.publish("deleteTodo", id);
    },
    handleCheck(id) {
      pubsub.publish("checkOne", id);
      // this.$bus.$emit('checkOne',id);
    },
    handleEdit(todo) {
      if (!todo.hasOwnProperty("isEdit")) {
        this.$set(todo, "isEdit", true);
      } else {
        todo.isEdit = true;
      }
      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
    },
    blurMethod(todo, e) {
      todo.isEdit = false;
      // console.log(e.target.value)
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover button {
  display: block;
}
</style>