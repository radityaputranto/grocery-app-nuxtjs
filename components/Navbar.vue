<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="p-0 mt-2 mb-4"
    >
      <b-navbar-brand>Perpustakaan</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home </b-nav-item>
          <b-nav-item to="/book">List Buku </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" to="/cart">
            Sewa Buku
            <!-- <b-icon-book></b-icon-book> -->
            <b-badge variant="primary">{{ orders.length }}</b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.orders = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8001/keranjangs")
      .then((response) =>{
          console.log(response.data.length)
          this.setJumlah(response.data)
      } )
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>