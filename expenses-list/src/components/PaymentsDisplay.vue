<template>
  <div class="payments-display-wrapper">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      {{ idx + 1 }}{{ item }}
      <!-- Object.values(item) выводит только значения объекта item, но в виде массива -->
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