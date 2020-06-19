<template>
  <v-app>
    <v-content class="body">
      <v-container>
        <v-row align-content="center" justify="center">
          <v-card tile width="488px" class="card">
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <input type="text" placeholder="username" class="login-form">
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <input type="password" placeholder="password" class="login-form">
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-btn dark color="#4BB050" tile width="388px" height="64px" @click="login">LOGIN</v-btn>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span class="base">Not Registered?
                        <span class="link">Create an account</span>
                      </span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Login',
    methods: {
      login: function () {
        this.$store.commit('changeLoginStatus');
        this.$router.push({
          name: 'Reminder'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .body {
    background-color: #77B955;
  }

  .card {
    margin-top: 20px;
  }

  .login-form {
    width: 388px;
    height: 64px;
    background-color: #DDDDDD;
    padding-left: 20px;

    &:focus {
      border: none;
      outline: 0;
    }
  }

  .base {
    color: #757575;
  }

  .link {
    color: #4DB658;
  }
</style>