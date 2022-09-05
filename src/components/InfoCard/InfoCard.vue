<template>
  <div class="info-card">
    <div class="info-card__head">
      <p class="txt--xs">{{ title }}</p>
      <button @click="isVisible = !isVisible" class="info-card__head-btn">
        <img src="../../assets/images/dots.svg" alt="delete">
      </button>
      <button v-if="isVisible" @click="deleteInfoCard(title)"
              class="info-card__head-delete">удалить
      </button>
    </div>
    <div class="info-card__content">
      <div class="info-card__content__number info-card__content-row">
        <p class="info-card__content__number-title txt--xs txt--blue">Номер накладной:</p>
        <p class="info-card__content__number-txt txt--xs">{{ txtNumber }}</p>
      </div>
      <div class="info-card__content__order info-card__content-row">
        <p class="info-card__content__order-title txt--xs txt--blue">Тип заказа:</p>
        <p class="info-card__content__order-txt txt--xs">{{ txtOrder }}</p>
      </div>
      <div class="info-card__content__date info-card__content-row">
        <p class="info-card__content__date-title txt--xs txt--blue">Дата создания:</p>
        <p class="info-card__content__date-txt txt--xs">{{ txtDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import './InfoCard.scss';
import { mapMutations } from 'vuex';

export default {
  name: 'InfoCard',
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
