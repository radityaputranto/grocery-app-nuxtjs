<template>
  <div class="card">
    <b-badge variant="warning" class="best-seller" v-if="product.best_seller"
      >Best Seller</b-badge
    >

    <!-- <img src="" alt="" v-if="priduct.picture" /> -->
    <b-img
      src="../assets/img/doodle-fruit.png"
      fluid
      alt="Responsive image"
      class="grayscale"
    />
    <h5 class="text-center">{{ product.nama }}</h5>
    <h5 class="font-weight-bold text-center">
      <span class="small text-muted">IDR</span> {{ product.harga }}
    </h5>
    <b-button
      class="borderless"
      variant="outline-success"
      :to="'product/' + product.id"
      ><b-icon-plus-circle></b-icon-plus-circle> Add to cart
    </b-button>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
</style>