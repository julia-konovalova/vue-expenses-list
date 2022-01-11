<template>
  <div class="wrapper">
    <button class="page" @click="onClick(cur - 1)">-</button>
    <button
      v-for="page in amountPages"
      :key="page"
      @click="onClick(page)"
      class="page"
      :class="{ active: page === cur }"
    >
      {{ page }}
    </button>
    <button class="page" @click="onClick(cur + 1)">+</button>
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
    onClick(p) {
      if (p < 1 || p > this.amountPages) {
        return;
      }
      //   регистрируем собственное событие, даем ему название
      this.$emit("paginate", p);
    },
  },
};
</script>

<style scoped >
.wrapper {
  display: flex;
  align-items: center;
  /* & > div {
    padding: 10px;
    &.active {
      background: #ccc;
    }
  } */
}
.page {
  padding: 10px;
  border: none;
}
.page.active {
  background: rgb(158, 158, 158);
}

.page:hover {
  background: rgb(221, 221, 221);
}
</style>