<template>
  <b-container fluid>
    <h1>List Books</h1>

    <div class="row">
      <div class="col-12">
        <div>
          <b-input-group
            size="lg"
            class="mb-3"
          >
            <b-form-input placeholder="search products.." v-model="search" @keyup="searchFood"></b-form-input>
            <b-input-group-append>
              <b-button size="sm" text="Search" variant="outline-success"
                ><b-icon-search></b-icon-search> Search</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-3 col-6 mb-3"
        v-for="product in products"
        :key="product.id"
      >
        <Cardproducts :product="product" />
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
      search :''
    };
  },
  methods: {
    setProdct(data) {
      this.products = data;
    },
    searchFood(){
        axios
      .get("http://localhost:8001/products?q="+this.search)
      .then((response) => this.setProdct(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }
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