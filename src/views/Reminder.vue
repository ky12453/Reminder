<template>
  <v-app>
    <v-content class="body">
      <v-container>
        <v-row justify="center">
          <v-card tile width="488px" class="card">
            <v-container>
              <v-card-actions>
                <input type="text" class="test" placeholder="What do you want do?" v-model="remi">
                <v-btn tile depressed height="54px" class="otameshi" color="#4BB050" dark @click="addReminder">ADD
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-row>

        <v-row justify="center">
          <v-card tile class="rem" width="488px">
            <div class="waku">
              <v-card-title>
                <span>Reminder</span>
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item v-for="reminder in $store.state.reminders" :key="reminder.id" class="tes">
                    <v-list-item-action>
                      <v-checkbox color="#4BB050">
                      </v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        <span>{{ reminder.title }}</span>
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-btn text fab @click="deleteReminder(reminder.id)" color="#F66565">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn text fab @click="editReminder(reminder)" color="#757575">
                      <v-icon>mdi-note</v-icon>
                    </v-btn>
                  </v-list-item>

                </v-list>
              </v-card-text>
            </div>
          </v-card>
        </v-row>
      </v-container>
      <reminder-editor ref="dialog" :reminder="selectedReminder"></reminder-editor>
    </v-content>
  </v-app>
</template>

<script>
  import ReminderEditor from '@/components/ReminderEditor.vue';

  export default {
    name: 'Reminder',
    components: {
      ReminderEditor,
    },

    data: function () {
      return {
        val: '8',
        selectedReminder: {},
        remi: '',
      }
    },

    methods: {
      addReminder: function () {
        this.$store.commit('addReminder', {id: undefined, title: this.remi});
        this.remi = '';
      },

      editReminder: function (reminder) {
        this.selectedReminder = reminder;
        this.$refs.dialog.isEditReminder = true;
      },

      deleteReminder: function (id) {
        this.$store.commit('deleteReminder', id);
      }
    }
  }
</script>

<style lang="scss" scoped>
.body {
  background-color: #77B955;
}

 .rem {
    margin-top: 20px;
  }
  
  span {
    color: #757575;
  }

  .reminder {
    margin-top: 20px;
  }

  input:focus {
    border: none;
    outline: 0;
  }

  .test {
    height: 54px;
    width: 330px;
    background-color: #DDDDDD;
    padding-left: 20px;
    margin: 30px;
  }

  .title {
    color: #A8A8A8;
  }

  .btn {
    margin-top: 15px;
  }

  .otameshi {
    margin-left: -30px;
  }

 

  .waku {
    margin: 30px;
  }

  .tes {
    margin-left: -15px;
  }
</style>