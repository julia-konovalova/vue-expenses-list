<template>
  <div id="app">
    <header>
      <a href="#dashboard">Dashboard</a> / <a href="#about">About</a> /
      <a href="#notfound">NotFound</a>
    </header>
    <div class="content">
      <Dashboard v-if="page === 'dashboard'" />
      <About v-if="page === 'about'" />
      <not-found v-if="page === 'notfound'" />
    </div>
  </div>
</template>

<script>
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
// import AddPaymentForm from "./components/AddPaymentForm.vue";
// import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// // mapMutations это встроенный функционал Vuex, чтобы вызывать методы мутации по их имени
// import { mapActions, mapGetters, mapMutations } from "vuex";
// import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    NotFound,
    About,
    // PaymentsDisplay,
    // AddPaymentForm,
    // Pagination,
  },
  data() {
    return {
      // paymentsList: [],
      // formIsShow: false,
      page: "",
      // количество строк на странице
      // n: 10,
    };
  },
  methods: {
    setPage() {
      // location это свойство глобального объекта window - адресная строка
      this.page = location.hash.slice(1);
    },
  },
  mounted() {
    this.setPage();
    // При переходе между вкладками, мы будем ослеживать событие изменения хэша с помощью встроенного события hashchange в адресной строке браузера(window)
    window.addEventListener("hashchange", () => this.setPage());
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
