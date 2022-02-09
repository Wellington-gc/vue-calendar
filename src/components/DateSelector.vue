<template>
  <div class="date-selector">
    <button class="alter-btn" @click="selectPrevious">-</button>
    <button class="reset-btn" @click="selectCurrent">Today</button>
    <button class="alter-btn" @click="selectNext">+</button>
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
      this.$store.commit("increment");
    },
  },
};
</script>

<style>
.date-selector {
  display: flex;
  gap: 15px;
}

.alter-btn {
  justify-content: center;
  align-items: center;
  width: 40px;
  font-size: 20px;
  font-weight: 100;
  background-color: #fff;
  border: 1px solid #3e4e63;
  border-radius: 5px;
  cursor: pointer;
}

.alter-btn:hover {
  background-color: #3e4e63;
  color: white;
}

.reset-btn {
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 100;
  background-color: #fff;
  border: 1px solid #3e4e63;
  border-radius: 5px;
  cursor: pointer;
  padding: 0px 15px;
}

.reset-btn:hover {
  background-color: #3e4e63;
  color: white;
}
</style>