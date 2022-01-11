<template>
  <div id="app">
    <div class="wrapper">
      <header>My Personal Costs</header>
      <main>
        <!-- Инициализируем компоненты -->
        <div v-if="formIsShow === false">
          <button @click="formIsShow = true">+ Add new payment</button>
        </div>
        <div v-else-if="formIsShow === true">
          <button @click="formIsShow = false">Hide form</button>
        </div>
        <add-payment-form
          v-show="formIsShow"
          @addNewPayment="onDataPaymentAdd"
        />
        <payments-display :items="currentElements" />
        <p>Сумма всех расходов:{{ getSumValue }}</p>
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="onChangePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// mapMutations это встроенный функционал Vuex, чтобы вызывать методы мутации по их имени
import { mapActions, mapGetters, mapMutations } from "vuex";
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      // paymentsList: [],
      formIsShow: false,
      page: 1,
      // количество строк на странице
      n: 10,
    };
  },
  computed: {
    // по аналогии с mapMutations. можно вызывать геттеры через сокращенную запись ...mapGetters
    ...mapGetters({
      getSumValue: "getFullPaymentValue",
      paymentsList: "getPaymentsList",
    }),
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * page);
    },
    // getSumValue() {
    //     return this.$store.getters.getFullPaymentValue;
    //   },
    //   paymentsList() {
    //     return this.$store.getters.getPaymentsList;
    //   },
  },
  methods: {
    // Т.к. mapMutations функция, то  пишем ее в методах,
    //  передаем в строке названия всех мутаций, которые будем использовать далее
    ...mapMutations({
      setData: "setPaymentsListData",
      addData: "addDataToPaymentsList",
    }),
    ...mapActions(["fetchData"]),
    // fetchData() {
    //   return [
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     { date: "30.03.2020", category: "Transport", value: 1980 },
    //     { date: "02.04.2020", category: "Food", value: 1150 },
    //   ];
    // },
    onDataPaymentAdd(data) {
      this.addData(data);
    },
    onChangePage(p) {
      this.page = p;
    },
  },
  created() {
    // Вызов мутации синтаксис (более простой способ через mapMutations в методах)
    // 1 аругмент - название мутации,
    // 2 - значение второго аргумента метода мутации payload(произвольное название)
    // this.$store.commit("setPaymentsListData", this.fetchData());
    // До использования Vuex this.paymentsList = this.fetchData();
    this.fetchData();

    // Длинная форма записи загрузки данных  из стора с пом actions: this.$store.dispatch("fetchData");
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  background: lightblue;
  min-height: 100px;
}
</style>
