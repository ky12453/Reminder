<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title>Reminder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-if="$store.state.isLogin" @click="logout">LOGOUT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        isLogin: false
      }
    },

    methods: {
      logout: function () {
        this.$store.commit('changeLoginStatus');
        this.$router.push({
          name: 'Login'
        });
      }
    }
  };
</script>