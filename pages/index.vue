<template>
  <div>
    <div class="mb-4">
      <b-jumbotron
        header="Perpustakaan"
        class="font-font-weight-bold"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      >
        <p>enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <b-button variant="primary" to="/book"
          >List Buku <b-icon-arrow-right></b-icon-arrow-right
        ></b-button>
      </b-jumbotron>
    </div>

    <h3 class="font-weight-bold">Popular books</h3>
    <div class="row">
      <div class="col-md-3 col-6 mb-3" v-for="product in products" :key="product.id">
        <Cardproducts :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      .then((response)=>this.setProdct(response.data)
      )
      .catch((error)=> {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style>
</style>
