<template>
  <div>
    <Breadcumb :link="link" />
    <h1>Product detail {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-6">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="col-md-6">
        <h2>
          <strong>{{ product.nama }}</strong>
        </h2>
        <h6>harga : {{ product.harga }}</h6>
        <form v-on:submit.prevent>
          <div class="form-group">
            <label for="">Jumlah Pesan</label>
            <input
              type="number"
              class="form-control"
              v-model="pesan.quantity"
            />
          </div>
          <div class="form-group">
            <label for="">Note</label>
            <textarea
              name=""
              id=""
              class="form-control"
              rows="5"
              v-model="pesan.note"
            ></textarea>
          </div>
          <button type="sumbit" class="btn btn-success" @click="checkout">
            <b-icon-cart></b-icon-cart> Pesan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

import Breadcumb from "../../components/Breadcumb.vue";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      product: {},
      pesan: {},
      link: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Books",
          href: "/book",
        },
        {
          text: /* product.name */ "tes",
          active: true,
        },
      ],
    };
  },
  methods: {
    setProdct(data) {
      this.product = data;
    },
    checkout() {
      if (this.pesan.quantity) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:8001/keranjangs", this.pesan)
          .then(() => {
            this.$toasted.success("Success add to cart", {
              theme: "toasted-primary",
              position: "top-right",
              duration: 3000,
            });
            this.$router.push({path:"/checkout"});
          })
          .catch((err) => console.log(err));
      } else {
        this.$toasted.error("quantity is required", {
              theme: "toasted-primary",
              position: "top-right",
              duration: 3000,
            });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:8001/products/" + this.$route.params.id)
      .then((response) => this.setProdct(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>