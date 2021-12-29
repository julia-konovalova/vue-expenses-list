<template>
  <button @click="onClick">Clicked {{ counter }}</button>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
  //   Эпоха создания компонента
  beforeCreate() {
    // Свойство data не доступно
  },
  created() {
    // В этом хуке доступно data
  },

  //   Эпоха монтирования компонента
  beforeMount() {
    // Темплэйт отрендерен, но еще не смонтирован,
    // нельзя достучаться до элементов внутри компонента
  },
  mounted() {
    // Компонент вставлен в DOM дерево, физически виден
    // Можно получить доступ к элементам, подписаться на события,
    // но их надо будет потом удалить, т.к. они нативные
  },
  beforeUpdate() {
    // Можно отловить состояние перед перерисовкой компонента, измененеиями
  },
  updated() {},
  beforeDestroy() {
    //   здесь надо удалить все нативные события с пом removeEventListener
  },
  destroyed() {},
};
</script>

<style>
</style>