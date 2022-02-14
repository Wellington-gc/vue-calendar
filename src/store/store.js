import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        day: dayjs(),
        selectedDate: dayjs().format('YYYY-MM-DD'),
        reminders: [],
        selectedReminder: {
            id: '',
            title: '',
            description: '',
            backgroundColor: '',
            textColor: '',
        },
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
        deleteReminder(state, id) {
            state.reminders = state.reminders.filter(item => item.id !== id);
        },
        selectDate(state, date) {
            state.selectedDate = date;
        },
        selectReminder(state, reminder) {
            state.selectedReminder = reminder;
        },
    },
    getters: {
        day: state => state.day,
        selectedDate: state => state.selectedDate,
        reminders: state => {
            const currentMonth = state.day.format('YYYY-MM');
            return state.reminders.filter(reminder => reminder.date.slice(0, 7) === currentMonth);
        },
        selectedReminder: state => state.selectedReminder,
    }
});