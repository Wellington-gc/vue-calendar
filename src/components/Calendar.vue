<template>
  <body>
    <div class="container">
      <div
        class="list-week-days"
        v-for="(day, index) in getDaysOfWeek()"
        v-bind:key="index"
      >
        <div class="week-day">{{ day }}</div>
      </div>

      <div
        class="month-days"
        v-for="(day, index) in getMonthDays()"
        v-bind:key="index"
      >
        <div class="day">{{ day }}</div>
      </div>
    </div>
  </body>
</template>

<script>
import moment from "moment";

export default {
  name: "Calendar",

  methods: {
    getDaysOfWeek() {
      return moment.weekdaysShort();
    },

    getMonthDays() {
      var monthDays = [];

      var date = moment([2022, 3]);

      let daysInMonth = date.daysInMonth();

      let firstDay = parseInt(date.startOf("month").format("e"));

      let lastDay = 6 - parseInt(date.endOf("month").format("e"));

      let firstWeekDay = parseInt(
        date.startOf("month").startOf("week").format("DD")
      );

      for (let i = 1 - firstDay, j = 1; i <= daysInMonth + lastDay; i++) {
        if (i < 1) {
          monthDays.push(firstWeekDay++);
        } else if (i > daysInMonth) {
          monthDays.push(j++);
        } else {
          monthDays.push(i);
        }
      }

      return monthDays;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 5%;
}

.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . .";
  justify-content: center;
  align-items: flex-end;
  margin: 10%;
}

.list-week-days {
  padding: 7px;
}

.week-day {
  text-align: center;
  font-size: 1.7rem;
}

.month-days {
  border: 1px solid #000;
  background-color: #fff;
  padding: 70px;
  text-align: center;
}

.day {
  font-size: 1rem;
}
</style>
