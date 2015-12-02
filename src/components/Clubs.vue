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
import vuex from '../vuex';
const { getAllClubs } = vuex.actions;

export default {
  name: 'Clubs',
  computed: {
    clubs() {
      return vuex.state.clubs;
    }
  },
  created() {
    getAllClubs();
  }
};
</script>