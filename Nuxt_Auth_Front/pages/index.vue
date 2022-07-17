<template>
  <b-container>
    <b-row class="py-2">
      <b-col cols="6" offset="3" class="text-center">
        <div class="title text-center">
          <h5>NUXT AUTH</h5>
        </div>
        <b-button variant="info" @click="onClickToHomeButton">
          Home
        </b-button>
        <b-button @click="onClickToAuthorized">
          Authorized
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    onClickToHomeButton() {
      this.$router.push('/')
    },

    onClickToAuthorized() {
      this.$router.push('/authorized')
    }
  }
}
</script>
