<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-12">
        <h1>{{ title }}</h1>
      </div>
      <div class="col-md-6 col-12">
        <b-breadcrumb
          :items="link"
          class="breadcrumb d-flex justify-content-end"
        ></b-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link", "title"],
  data() {
    return {};
  },
};
</script>