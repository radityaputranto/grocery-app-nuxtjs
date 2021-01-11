<template>
  <div>
    <Breadcumb :link="link" />
    <h1>Cart</h1>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Note</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-if="charts.length >= 1">
              <tr v-for="(item, index) in charts" :key="charts.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.products.nama }}</td>
                <td>{{ item.note }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                  <span class="small text-muted">IDR</span>
                  {{ item.products.harga }}
                </td>
                <td>
                  <span class="small text-muted">IDR</span>
                  {{ item.products.harga * item.quantity }}
                </td>
                <td>
                  <b-icon-trash
                    class="text-danger"
                    @click="deleteOrder(item.id)"
                  ></b-icon-trash>
                </td>
              </tr>

              <tr>
                <td colspan="5" align="right" class="font-weight-bold">
                  Total :
                </td>
                <td class="font-weight-bold">
                  <span class="small text-muted">IDR</span> {{ totalPrice }}
                </td>
                <td></td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="7" align="center">
                  <h6 class="text-center">No Data Available</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
          text: /* product.name */ "Cart",
          active: true,
        },
      ],
    };
  },
  methods: {
    setChart(data) {
      this.charts = data;
    },
    deleteOrder(id) {
      axios
        .delete("http://localhost:8001/keranjangs/" + id)
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
        });
    },
    getData(){
      axios
      .get("http://localhost:8001/keranjangs")
      .then((response) => {
        console.log(response.data.length);
        this.setChart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
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