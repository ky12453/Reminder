import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    reminderNum: 2,
    reminders: [
      {
        id: 1,
        title: 'Create a budget'
      },
      {
        id: 2,
        title: 'Consult with constractor'
      }
    ]
  },
  mutations: {
    changeLoginStatus: function(state) {
      if (state.isLogin) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },

    addReminder: function(state, reminder) {
      reminder.id = state.reminderNum + 1;
      state.reminders.push(reminder);
      state.reminderNum += 1;
    },

    updateReminder: function(state, arg) {
      state.reminders.some(function(reminder, i) {
        if (reminder.id == arg.id) {
          state.reminders[i].title = arg.title;
        }
      })
    },
    
    deleteReminder: function(state, id) {
      state.reminders.some(function(reminder, i) {
        if (reminder.id == id) {
          state.reminders.splice(i, 1);
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
