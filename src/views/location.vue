<script>
import { sessions, fetchSessions } from "../lib/sessions";

export default {
  props: {
    UID: String,
  },

  setup(props) {
    fetchSessions(props.UID);

    return { sessions };
  },
};
</script>

<template>
  <div v-if="sessions.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="sessions.data.length" class="accordion accordion-flush">
    <div
      v-for="{ fields, id } in sessions.data"
      :key="id"
      class="alert text-center d-flex flex-column flex-md-row justify-content-between"
      :class="
        fields.InclementWeather ||
        fields.Flooding ||
        fields.CapacityReached ||
        fields.Available <= 0
          ? 'alert-warning'
          : 'alert-primary'
      "
      role="alert"
    >
      <span>
        <strong> {{ fields.SessionName }} </strong> -

        {{ fields.Times }}
      </span>

      <strong v-if="fields.InclementWeather"> Severe Weather </strong>
      <strong v-if="fields.Flooding"> Flooding </strong>
      <strong v-else-if="fields.CapacityReached || fields.Available <= 0">
        Capacity Limit Reached
      </strong>

      <span>
        <span v-if="!fields.CapacityReached && fields.Available > 0">~</span>
        {{ fields.CapacityReached ? 0 : fields.Available }} /
        {{ fields.Capacity }} Slots Available
      </span>
    </div>
  </div>

  <div v-else class="alert alert-info" role="alert">
    There are no slots available at this time.
  </div>
</template>
