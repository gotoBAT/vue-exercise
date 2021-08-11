<template>
  <div class="container">
    <category title="食物">
      <template slot-scope="michael">
        <ul>
          <li v-for="(food, index) in michael.foods" :key="index">
            {{ food }}
          </li>
        </ul>
        <h1>{{ michael.msg }}</h1>
      </template>
    </category>
    <category title="食物">
      <template slot-scope="{foods}">
        <ol>
          <li v-for="(food, index) in foods" :key="index">
            {{ food }}
          </li>
        </ol>
      </template>
    </category>
    <category title="食物">
      <template scope="{foods}">
        <h4 v-for="(food, index) in foods" :key="index">
          {{ food }}
        </h4>
      </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>

