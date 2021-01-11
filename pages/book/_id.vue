<template>
  <div>
    <Breadcumb :link="link"  />
    <h1>Product detail {{ $route.params.id }}</h1>
    <div class="row">
        <div class="col-md-6">
            <!-- <img src="" alt=""> -->
        </div>
        <div class="col-md-6">
            <h2><strong>{{ product.nama }}</strong></h2>
            <h6>harga : {{product.harga}}</h6>
            <form action="">
                <div class="form-group">
                    <label for="">Jumlah Pesan</label>
                    <input type="number" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Note</label>
                    <textarea name="" id="" class="form-control" rows="5"></textarea>
                </div>
                <button type="sumbit" class="btn btn-success"> <b-icon-cart></b-icon-cart> Pesan</button>
            </form>
        </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Breadcumb from '../../components/Breadcumb.vue';
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      product: [],
      link:[
          {
            text: 'Home',
            href: '/'
          },
          {
            text: 'Books',
            href: '/book'
          },
          {
            text: /* product.name */'tes',
            active: true
          }
        ]
    };
  },
  methods: {
    setProdct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8001/products/"+this.$route.params.id)
      .then((response) => this.setProdct(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>