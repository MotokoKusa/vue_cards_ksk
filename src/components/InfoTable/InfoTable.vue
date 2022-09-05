<template>
  <tr class="info-table txt--xs">
    <td>{{ title }}</td>
    <td>{{ txtNumber }}</td>
    <td>{{ txtOrder }}</td>
    <td>{{ txtDate }}</td>
    <td>
      <button @click="isVisible = !isVisible" class="info-table-btn">
        <img src="../../assets/images/dots.svg" alt="delete">
      </button>
      <button v-if="isVisible" @click="deleteInfoCard(title)"
              class="info-table-delete">удалить
      </button>
    </td>
  </tr>
</template>

<script>
import './InfoTable.scss';
import { mapMutations } from 'vuex';

export default {
  name: 'InfoTable',
  data() {
    return {
      isVisible: false,
    };
  },
  props: ['title', 'txtNumber', 'txtOrder', 'txtDate'],
  methods: {
    ...mapMutations(['deleteInfoCard']),
  },
};
</script>

<style scoped>

</style>
