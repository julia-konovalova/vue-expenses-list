<template>
  <div class="wrapper">
    <div @click="onClick(cur - 1)">-</div>
    <div
      v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      class="page"
      :class="{ active: page === cur }"
    >
      {{ page }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amountPages() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.amountPages) {
        return;
      }
      this.$emit(page);
    },
  },
};
</script>

<style scoped >
.wrapper {
  display: flex;
  /* & > div {
    padding: 10px;
    &.active {
      background: #ccc;
    }
  } */
}
.page {
  padding: 10px;
}
.page.active {
  background: #ccc;
}
</style>