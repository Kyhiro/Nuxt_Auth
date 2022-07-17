<template>
  <b-container>
    <b-row class="py-4">
      <b-col cols="6" offset="md-3">
        <b-alert variant="success" class="text-center" show>
          authorized
          <b-badge variant="info">
            <NuxtLink to="/home">Home</NuxtLink>
          </b-badge>
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AuthorizedPage',
  middleware: 'authenticated.middleware'
}
</script>
