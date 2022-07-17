<template>
  <b-container>
    <b-row class="py-4">
      <b-col cols="6" offset="md-3">
        <template v-if="isAuthenticated">
          <b-alert variant="success" class="text-center" show>LoggedIn</b-alert>
          <span class="hidden-sm hidden-xs">User: {{ loggedInUser.name }}</span>
          <b-button @click="onClickToLogout" variant="danger" size="sm">Logout</b-button>
        </template>
        <template v-else>
          <b-alert variant="info" class="text-center" show>
            Unauthorized! <b-badge variant="success"><NuxtLink to="/login">Login</NuxtLink></b-badge> now.
          </b-alert>
        </template>

        <b-button @click="onClickToGetUsers" variant="info" size="sm">Get Users</b-button>
        <b-overlay :show="isGetUserLoading" rounded="sm">
          <b-card class="my-3">
            <div>{{ usersList }}</div>
          </b-card>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  data: function() {
    return {
      isGetUserLoading: false,
      usersList: []
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async onClickToLogout() {
      await this.$auth.logout();
      return this.$router.push('/login');
    },

    async onClickToGetUsers() {
      this.isGetUserLoading = true
      const response = await this.$axios.$get('/users').catch(() => [])
      this.isGetUserLoading = false

      this.usersList = response.users || []
    },
  },

}
</script>
