<template>
  <b-container>
    <b-row class="py-4">
      <b-col cols="6" offset="md-3">
        <b-form @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              required
              type="password"
            ></b-form-input>
          </b-form-group>

          <b-button
            @click="onSubmit"
            type="button"
            variant="primary">
            Submit
          </b-button>
          <b-button
            type="reset"
            variant="danger">
            Reset
          </b-button>
          <NuxtLink to="/home">Home</NuxtLink>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        try {
          const response = await this.$auth.loginWith('local', { data: this.form })
          console.log('response', response)
        } catch (e) {
          this.error = 'Username or Password not valid'
        }

      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
