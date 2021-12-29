<template>
  <div id="app">
    <div class="wrapper">
      <header>My Personal Costs</header>
      <main>
        <!-- Инициализируем компоненты -->
        <button @click="isShow = true">+ Add new payment</button>
        <add-payment-form v-show="isShow" @addNewPayment="onDataPaymentAdd" />
        <payments-display :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      isShow: false,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        { date: "30.03.2020", category: "Transport", value: 1980 },
        { date: "02.04.2020", category: "Food", value: 1150 },
      ];
    },
    onDataPaymentAdd(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
