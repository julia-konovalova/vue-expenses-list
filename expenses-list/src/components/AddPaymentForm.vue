<template>
  <div class="payment-content">
    <select name="Category" v-model="category" id="">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <input placeholder="Date" v-model="date" type="date" />
    <input placeholder="Value" v-model.number="value" type="number" />
    <button @click="onClickSave">Save</button>
    <button @click="onClickClear">Clear</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      category: "",
      date: "",
      value: 0,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };

      this.$emit("addNewPayment", data);
    },

    onClickClear() {
      (this.date = ""), (this.value = 0), (this.category = "");
    },
  },
  mounted() {
    if (!this.category?.length) {
      this.$store.dispatch("fetchCategory");
    }
  },
};
</script>
<style scoped>
</style>
