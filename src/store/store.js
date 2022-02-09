import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        day: dayjs(),
        selectedDate: dayjs().format('YYYY-MM-DD'),
        reminders: []
    },
    mutations: {
        increment(state) {
            state.day = state.day.add(1, "month");
        },
        decrement(state) {
            state.day = state.day.subtract(1, "month");
        },
        reset(state) {
            state.day = dayjs();
        },
        setReminders(state, reminder) {
            state.reminders.push(reminder);
        },
        selectDate(state, date) {
            state.selectedDate = date;
        }
    },
    getters: {
        day: state => state.day,
        selectedDate: state => state.selectedDate,
        reminders: state => {
            const currentMonth = state.day.format('YYYY-MM');
            return state.reminders.filter(reminder => reminder.date.slice(0, 7) === currentMonth);
        }
    }
});