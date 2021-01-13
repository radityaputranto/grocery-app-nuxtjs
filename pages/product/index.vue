<template>
  <b-container fluid>
    <div class="row justify-content-end">
      <div class="col-md-6 col-12">
        <h1>Product List</h1>
      </div>
      <div class="col-md-6 col-12">
        <b-input-group class="input-search">
          <b-input-group-prepend is-text>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            placeholder="search products.."
            v-model="search"
            @keyup="searchFood"
          ></b-form-input>
        </b-input-group>
      </div>
    </div>

    <div class="row row-eq-height" v-if="products.length >= 1">
      <div
        class="col-md-3 col-6 mb-4"
        v-for="product in products"
        :key="product.id"
      >
        <Cardproducts :product="product" />
      </div>
    </div>
    <div v-else>
      <div class="justify-content-center empty-img">
        <center><h6 class="text-muted mt-3 mb-3">No available data</h6></center>
        <b-img
          src="../../assets/img/undraw_Taken_re_yn20.svg"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
    </div>
  </b-container>
</template> 

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProdct(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:8001/products?q=" + this.search)
        .then((response) => this.setProdct(response.data))
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8001/products")
      .then((response) => this.setProdct(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style  scoped>
.empty-img {
  width: 25%;
  margin: 0 auto;
}
</style>