import Vue from 'vue';
import Vuex from 'vuex';
import InfoCards from '@/data/cards.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoData: [],
    filterData: [],
  },
  getters: {
    getInfoData(state) {
      return state.infoData ? state.infoData : [];
    },
    getFilterData(state) {
      return state.infoData.map((item) => ({
        infoType: item.type,
        typeOrderRu: item.typeOrderRu,
        isCheck: false,
      }));
    },
  },
  mutations: {
    updateInfoData(state, info) {
      state.infoData = info;
    },
    deleteInfoCard(state, item) {
      state.infoData = state.infoData.filter((el) => el.id !== item);
    },
  },
  actions: {
    loadInfo(context) {
      context.commit('updateInfoData', InfoCards.map((item) => {
        let typeOrder = null;
        if (item.type === 'Pickup') {
          typeOrder = 'Самовывоз';
        } else if (item.type === 'Delivery') {
          typeOrder = 'Доставка';
        } else {
          typeOrder = 'Пункт самовывоза';
        }

        return {
          ...item,
          dateItem: new Date(item.creationDate).toLocaleString()
            .replace(',', ''),
          typeOrderRu: typeOrder,
        };
      }));
    },
  },
});
