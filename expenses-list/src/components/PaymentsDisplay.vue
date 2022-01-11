<template>
  <div class="payments-display-wrapper">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      {{ item }}
      <!-- Object.values(item) выводит только значения объекта item без свойств объекта, но в виде массива -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>