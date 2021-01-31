<template>
  <div>
    <Breadcumb :link="link" :title="title" />
    <h6 class="text-muted">You have {{ total_items }} items in your cart</h6>
    <div class="row justify-content-center">
      <div class="col-md-8 col-12" v-if="charts.length >= 1">
        <div class="card mb-3" v-for="(item, index) in charts" :key="charts.id">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h5 class="font-weight-bold">
                  {{ item.products.nama }}
                </h5>
                <small class="text-muted">
                  {{ item.note }}
                </small>
              </div>
              <div class="col-md-2">
                <h5>{{ item.quantity }}</h5>
              </div>
              <div class="col-md-3">
                <h5 class="font-weight-bold">
                  <span class="small text-muted">IDR</span>
                  {{ item.products.harga }}
                </h5>
              </div>
              <div class="col-md-1">
                <a
                  href=""
                  class="delete-order"
                  v-on:click.prevent="deleteOrder(index)"
                >
                  <b-icon-trash></b-icon-trash>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12" v-if="charts.length >= 1">
        <div class="card">
          <div class="card-body">
            <h5>Total Payment</h5>
            <h4 class="font-weight-bold">
              <span class="small text-muted">IDR</span> {{ totalPrice }}
            </h4>
            <hr />
            <!-- Form Checkout -->
            <h6 class="text-muted">Order ID : jdsfksd3423424</h6>
            <form class="mt-4" v-on:submit.prevent v-if="charts.length >= 1">
              <div class="form-group">
                <label for="nama">Name :</label>
                <input type="text" class="form-control" v-model="pesan.nama" />
              </div>
              <div class="form-group">
                <label for="email">Email :</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="pesan.email"
                />
                <small class="text-muted"
                  >Invoice and book order will be sent to your email
                </small>
              </div>

              <button
                type="submit"
                class="btn btn-block btn-success float-right"
                @click="submitCart"
              >
                <b-icon-cart></b-icon-cart> Checkout
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- empty -->
      <div class="col-md-4" v-else>
        <center><h6 class="text-muted mt-3 mb-3">Cart Empty</h6></center>
        <b-img
          src="../../assets/img/undraw_empty_cart_co35.svg"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      charts: [],
      total_items: 0,
      pesan: {},
      title: "Shopping Cart",
      link: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Shopping Cart",
          active: true,
        },
      ],
    };
  },
  methods: {
    setChart(data) {
      this.charts = data;
      this.total_items = data.length;
    },
    deleteOrder(id) {
      /* axios
        .delete("http://localhost:8001/charts/" + id)
        .then((response) => {
          this.$toasted.error("Order Deleted", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 3000,
          });
          this.getData();
        })
        .catch((error) => {
          console.log(error);
        }); */
      console.log(id);
      this.charts.splice(id, 1);
      console.log(this.charts);
      this.setData();
    },
    getData() {
      /* axios
        .get("http://localhost:8001/charts")
        .then((response) => {
          console.log(response.data.length);
          this.setChart(response.data);
        })
        .catch((error) => {
          console.log(error);
        }); */
      if (localStorage.getItem("cart")) {
        try {
          this.setChart(JSON.parse(localStorage.getItem("cart")));
        } catch (e) {
          localStorage.removeItem("cart");
        }
      }
    },
    setData() {
      const parsed = JSON.stringify(this.charts);
      localStorage.setItem("cart", parsed);
    },
    checkout() {
      if (this.pesan.nama && this.pesan.email) {
        this.pesan.charts = this.charts;
        axios
          .post("http://localhost:8001/orders", this.pesan)
          .then(() => {
            // Hapus Semua Keranjang
            this.charts.map(function (item) {
              return axios
                .delete("http://localhost:8001/charts/" + item.id)
                .catch((error) => console.log(error));
            });
            this.$router.push({ path: "/success" });
            this.$toasted.success("Order Successfully", {
              theme: "toasted-primary",
              position: "top-right",
              duration: 3000,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toasted.error("Name and table number are required", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    totalPrice() {
      return this.charts.reduce(function (item, data) {
        return item + data.products.harga * data.quantity;
      }, 0);
    },
  },
};
</script>