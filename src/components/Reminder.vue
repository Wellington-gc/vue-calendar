<template>
  <div class="container">
    <div class="container-header">
      <input
        type="date"
        class="selected-date"
        disabled
        :value="this.$store.getters.selectedDate"
      />
    </div>

    <div class="container-body">
      <div class="form-reminder">
        <span>Title: </span>
        <input class="input-data" v-model="title" type="text" />
      </div>

      <div class="form-reminder">
        <span>Description: </span>
        <input class="input-data" v-model="description" type="text" />
      </div>

      <div class="form-reminder">
        <span>Background Color: </span>
        <input
          class="input-color"
          v-model="backgroundColor"
          type="color"
          value="#abc123"
        />
      </div>

      <div class="form-reminder">
        <span>Text Color: </span>
        <input
          class="input-color"
          v-model="textColor"
          type="color"
          value="#abc123"
        />
      </div>
      <button class="btn-add" @click="addReminder()">Add Reminder</button>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "reminder",

  data() {
    return {
      title: "",
      description: "",
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
    };
  },

  methods: {
    addReminder() {
      this.$store.commit("setReminders", {
        id: uuidv4(),
        date: this.$store.getters.selectedDate,
        title: this.title,
        description: this.description,
        backgroundColor: this.backgroundColor,
        textColor: this.textColor,
      });
    },
  },
};
</script>

<style>
.container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 50%;
  width: 500px;
  border: 1px solid #3e4e63;
  border-radius: 10px;
  background-color: #3e4e631e;
}

.container-body {
  padding: 0px 20px 20px 20px;
}

.container-header {
  max-width: 99%;
}

.selected-date {
  width: 100%;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 900;
  font-size: 1rem;
}

.form-reminder {
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 1.1rem;
  align-items: center;
}

.btn-add {
  padding: 10px;
  border: 1px solid #3e4e63;
  border-radius: 10px;
  background-color: rgb(223, 223, 223);
  cursor: pointer;
  width: 100%;
  margin-top: 5px;
}

.btn-add:hover {
  background-color: #3e4e63;
  color: white;
}

.input-data {
  height: 25px;
  border-radius: 10px;
  border: none;
  width: 250px;
  padding: 5px;
}

.input-color {
  border: none;
  padding: 0;
  width: 60px;
  height: 30px;
}
</style>