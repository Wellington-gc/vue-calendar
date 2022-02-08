<template>
  <div class="date-indicator">
    {{ selectedMonth }}
  </div>
</template>

<script>
export default {
  name: "DateIndicator",

  computed: {
    selectedMonth() {
      return this.$store.getters.day.format("MMMM YYYY");
    },
  },
};
</script>

<style>
.date-indicator {
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
}
</style>