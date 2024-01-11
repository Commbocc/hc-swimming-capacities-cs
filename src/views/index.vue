<script>
import { locations, fetchLocations } from "../lib/locations";

export default {
  setup() {
    fetchLocations();
    return { locations };
  },
};
</script>

<template>
  <div v-if="locations.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="locations.data.length" class="list-group">
    <router-link
      v-for="{ id, fields } in locations.data"
      :key="id"
      :to="{ name: 'Location', params: { UID: fields.UID || '#' } }"
      class="list-group-item list-group-item-action"
    >
      {{ fields.name }}
    </router-link>
  </div>

  <div v-else class="alert alert-info" role="alert">
    No locations are offering programming at this time.
  </div>
</template>
