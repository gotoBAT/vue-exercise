<template>
  <div>
    <ul>
      <li v-for="msg in msgs" :key="msg.id">
        <!-- <router-link
          :to="`/home/message/detail/${msg.id}/${msg.name}`"
        >
          {{ msg.name }}
        </router-link> -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: msg.id,
              name: msg.name,
            },
          }"
        >
          {{ msg.name }}
        </router-link>
        <button @click="push(msg)">push</button>
        <button @click="replace(msg)">replace</button>
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
  methods: {
    push(msg) {
      this.$router.push({
        name:'xiangqing',
        query: {
              id: msg.id,
              name: msg.name,
            },
      });
    },
    replace(msg){
      this.$router.replace({
        name:'xiangqing',
        query: {
              id: msg.id,
              name: msg.name,
            },
      });
    }
  },
};
</script>