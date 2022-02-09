<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }"
    @click="addReminder(day.date)"
  >
    <span>{{ label }}</span>
    <div v-if="day.reminders && day.reminders.length > 0">
      <div v-for="reminder in day.reminders" :key="reminder.id">
        <div
          class="reminder-card"
          :style="{
            backgroundColor: reminder.backgroundColor,
            color: reminder.textColor,
          }"
        >
          {{ reminder.title }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "MonthDayItem",

  props: {
    day: {
      type: Object,
      required: true,
    },

    isCurrentMonth: {
      type: Boolean,
      default: false,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    addReminder(date) {
      this.$store.commit("selectDate", date);
    },
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
  },
};
</script>

<style>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 5px;
  cursor: pointer;
}

.calendar-day:hover {
  background-color: rgba(122, 122, 122, 0.005);
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}

.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}

.reminder-card {
  display: flex;
  position: relative;
  border: solid 1px #000;
  font-size: 1.2rem;
  margin-right: 20%;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style>