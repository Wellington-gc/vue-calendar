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
      <div v-if="reminders && reminders.length > 0">
        <div v-for="reminder in reminders" :key="reminder.id">
          <div class="reminder-card">
            <div class="reminder-content">
              <span class="reminder-title">{{ reminder.title }}</span>
              <span class="reminder-description"
                >Description: {{ reminder.description }}
              </span>
            </div>

            <button class="delete-button" @click="deleteReminder(reminder.id)">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListReminders",

  props: {
    reminders: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteReminder(id) {
      this.$store.commit("deleteReminder", id);
    },
  },
};
</script>

<style scoped>
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
  max-width: 90%;
  max-height: 190px;
  overflow-y: auto;
  overflow-x: none;
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

.reminder-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.reminder-card {
  /* padding: 1rem; */
  width: 100%;
  background-color: #fff;
}
</style>