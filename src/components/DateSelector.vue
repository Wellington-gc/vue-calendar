<template>
  <div class="date-selector">
    <button @click="selectPrevious">-</button>
    <button @click="selectCurrent">Today</button>
    <button @click="selectNext">+</button>
  </div>
</template>

<script>
export default {
  name: "DateSelector",

  methods: {
    selectPrevious() {
      this.$store.commit("decrement");
    },

    selectCurrent() {
      this.$store.commit("reset");
    },

    selectNext() {
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
.date-selector {
  display: flex;
  justify-content: space-between;
  width: 80px;
  color: var(--grey-800);
  gap: 10px;
}

.date-selector > * {
  cursor: pointer;
  user-select: none;
}
</style>