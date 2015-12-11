<template>
<div>
  <span>Clubs view</span>
  
  <ul>
    <li v-for="club in clubs">
      {{ club.name }}
    </li>
  </ul>
</div>
</template>

<script>
import store from '../store';
const { getAllClubs } = store.actions;

export default {
  name: 'Clubs',
  computed: {
    clubs() {
      return store.state.clubs;
    }
  },
  created() {
    getAllClubs();
  }
};
</script>