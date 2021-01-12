<template>
  <div>
    <Breadcumb :link="link" :title="title" />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <b-img
              src="../../assets/img/doodle-fruit.png"
              fluid
              alt="Responsive image"
              class="grayscale text-center null-image"
            />
          </div>
          <div class="col-md-6">
            <b-badge
              variant="warning"
              class="best-seller"
              v-if="product.best_seller"
              >Best Seller</b-badge
            >
            <h3 class="grey-text">
              <strong>{{ product.nama }}</strong>
            </h3>
            <h5>
              Price : <span class="small text-muted">IDR</span>
              {{ product.harga }}
            </h5>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </small>
            <hr />
            <form v-on:submit.prevent>
              <div class="form-group">
                <label for="">Quantity</label>
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
                  rows="3"
                  v-model="pesan.note"
                ></textarea>
              </div>
              <button type="sumbit" class="btn btn-success" @click="checkout">
                <b-icon-cart></b-icon-cart> Order
              </button>
            </form>
          </div>
        </div>
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
      title: "Product Detail",
      link: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Products",
          href: "/product",
        },
        {
          text: "",
          active: true,
        },
      ],
    };
  },
  methods: {
    setProdct(data) {
      this.link[2]["text"] = data.nama;
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
            this.$router.push({ path: "/cart" });
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

<style  scoped>
.null-image {
  width: 70%;
  margin: 0 auto;
}
.best-seller {
  width: 80px;
}
</style>