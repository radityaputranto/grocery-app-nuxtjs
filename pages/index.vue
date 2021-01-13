<template>
  <div>
    <div class="mb-4">
      <b-jumbotron
        header="Grocery"
        class="font-font-weight-bold dark-green-text"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      >
        <p>enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <b-button variant="warning" to="/product">
          Check Now <b-icon-arrow-right></b-icon-arrow-right>
        </b-button>
      </b-jumbotron>
    </div>

    <h4 class="font-weight-bold grey-text">
      Good Deals
      <NuxtLink to="/product" class="link float-right small">show all</NuxtLink>
    </h4>
    <div class="row">
      <div
        class="col-md-3 col-6 mb-3"
        v-for="product in products"
        :key="product.id"
      >
        <Cardproducts :product="product" />
      </div>
    </div>
    <!-- credit -->
    <!-- <a href='https://pngtree.com/so/doodle-clipart'>doodle clipart png from pngtree.com</a>
    <a href='https://pngtree.com/so/healthy'>healthy png from pngtree.com</a> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProdct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8001/best-products")
      .then((response) => this.setProdct(response.data))
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>
</style>
