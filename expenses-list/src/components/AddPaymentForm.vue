<template>
  <div class="payment-content">
    <input placeholder="Category" v-model="category" type="text" />
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
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        value: this.value,

        category: this.category,
      };

      this.$emit("addNewPayment", data);
    },
    onClickClear() {},
  },
};
</script>

<style>
</style>