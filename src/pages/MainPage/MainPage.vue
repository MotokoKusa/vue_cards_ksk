<template>
  <section class="info">
    <div class="container">
      <div class="info__wrap">
        <div class="info__filter">
          <h3 class="info__filter-title txt--m">Фильтр</h3>
          <label class="info__filter-label" for="infoNumber">
            <p class="txt--xs">Номер накладной:</p>
            <input placeholder="Введите фрагмент" class="info__filter-input txt--xs input"
                   v-model="numberFilter"
                   id="infoNumber"
                   name="infoNumber"
                   type="text">
          </label>
          <label class="info__filter-label" for="infoOrder">
            <p class="txt--xs">Тип заказа:</p>
            <select class="txt--xs select" v-model="filterSelected" name="" id="infoOrder">
              <option class="txt--xs" value="default" selected>Выберите из списка
              </option>
              <option v-for="(el, idx) in filterData" :key="idx" :value="el.typeOrder">
                {{ el.typeOrderRu }}
              </option>
            </select>
          </label>

        </div>
        <div class="info__box">
          <div class="info__sort">
            <label class="info__sort-label" for="infoSort">
              <select class="txt--m select" v-model="sortSelected" name="" id="infoSort">
                <option value="default" selected>Сортировка</option>
                <option v-for="(el, idx) in sortData" :key="idx" :value="el.value">
                  {{ el.txt }}
                </option>
              </select>
            </label>
            <div class="info__sort-links">
              <router-link class="info__sort-route" :to="{name:'main'}">
                <img src="../../assets/images/main.png" alt="info">
              </router-link>
              <router-link class="info__sort-route" :to="{name:'table'}">
                <img src="../../assets/images/table.png" alt="table">
              </router-link>
            </div>
          </div>
          <table class="info__table">
            <tbody>
            <tr class="txt--m">
              <th class="info__table-id">ID</th>
              <th class="info__table-number">Номер накладной</th>
              <th class="info__table-id">Тип заказа</th>
              <th class="info__table-id">Дата создания</th>
              <th class="info__table-id"></th>
            </tr>
            <InfoTable v-for="el in filteredInfoData" :key="el.id" :title="el.id"
                       :txt-date="el.dateItem"
                       :txt-number="el.number" :txt-order="el.typeOrderRu"/>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/styles/global.scss';
import './MainPage.scss';
import { mapActions, mapGetters } from 'vuex';
import InfoTable from '@/components/InfoTable/InfoTable.vue';

export default {
  name: 'MainPage',
  data() {
    return {
      filterData: [
        {
          typeOrder: 'Pickup',
          typeOrderRu: 'Самовывоз',
        },
        {
          typeOrder: 'Delivery',
          typeOrderRu: 'Доставка',
        },
        {
          typeOrder: 'Pick-point',
          typeOrderRu: 'Пункт самовывоза',
        },
      ],
      sortData: [{
        txt: 'По возрастанию',
        value: 'up',
      }, {
        txt: 'По убыванию',
        value: 'down',
      }],
      filterSelected: 'default',
      sortSelected: 'default',
      numberFilter: '',
    };
  },
  components: {
    InfoTable,
  },
  computed: {
    ...mapGetters(['getInfoData']),
    filteredInfoData() {
      let filtered = [...this.getInfoData];
      if (this.numberFilter) {
        filtered = filtered.filter((el) => el.number.toLowerCase()
          .includes(this.numberFilter.toLowerCase()));
      }
      if (this.filterSelected && this.filterSelected !== 'default') {
        filtered = filtered.filter((el) => el.type === this.filterSelected);
      }

      if (this.sortSelected && this.sortSelected !== 'default') {
        if (this.sortSelected === 'up') {
          filtered.sort((a, b) => {
            const numberA = a.number.toLowerCase();
            const numberB = b.number.toLowerCase();
            if (numberA < numberB) { return -1; }
            if (numberA > numberB) return 1;
            return 0;
          });
        }
        if (this.sortSelected === 'down') {
          filtered.sort((a, b) => {
            const numberA = a.number.toLowerCase();
            const numberB = b.number.toLowerCase();
            if (numberA > numberB) { return -1; }
            if (numberA < numberB) return 1;
            return 0;
          });
        }
      }
      return filtered;
    },
  },
  methods: {
    ...mapActions(['loadInfo']),
  },
  created() {
    this.loadInfo();
  },
};
</script>
