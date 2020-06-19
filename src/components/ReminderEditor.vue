<template>
  <v-container>
    <v-row>
      <v-col>
        <v-dialog v-model="isEditReminder" width="488px">
          <v-card>
            <v-card-text>
              <input type="text" class="test" v-model="title">
            </v-card-text>
            <v-card-actions>
              <div class="gg">
                <v-btn dark @click="cancel" color="#4BB050" tile depressed>CANCEL</v-btn>
                <v-btn dark @click="ok" color="#4BB050" tile depressed class="hh">OK</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Editor',
    props: {
      reminder: {
        type: Object,
        required: true
      }
    },

    data: function () {
      return {
        isEditReminder: false,
        id: 0,
        title: ''
      }
    },

    watch: {
      reminder: {
        immediate: true,
        handler: function() {
          this.id = this.reminder.id;
          this.title = this.reminder.title;
        }
      }
    },

    methods: {
      cancel: function () {
        this.isEditReminder = false;
      },

      ok: function () {
        this.$store.commit('updateReminder', {id: this.id, title: this.title});
        this.isEditReminder = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .waku {
    margin: 30px;
  }

  input:focus {
    border: none;
    outline: 0;
  }

  .test {
    height: 54px;
    width: 398px;
    background-color: #DDDDDD;
    padding-left: 20px;
    margin-left: 20px;
    margin-top: 45px;
  }

  .gg {
    margin-left: 260px;
    margin-bottom: 25px;
  }

  .hh {
    margin-left: 15px;
  }
</style>