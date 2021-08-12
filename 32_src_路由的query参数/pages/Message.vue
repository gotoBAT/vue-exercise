<template>
  <div>
    <ul>
      <li v-for="msg in msgs" :key="msg.id">
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: msg.id,
              name: msg.name,
            },
          }"
        >
          {{ msg.name }}
        </router-link>
      </li>
    </ul>
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgs: [
        { id: "001", name: "michael" },

        { id: "002", name: "durant" },

        { id: "003", name: "kevin" },
      ],
    };
  },
};
</script>