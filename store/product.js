import Vuex from "vuex";
import axios from "axios";

export const state = {
  best_product: [],
  products: [],
  detailProduct: [],
  search: ""
};
export const getters = {
  getBestProduct: state => {
    return state.best_product;
  },
  getProducts: state => {
    return state.products;
  },
  getDetailProduct: state => {
    console.log(state.detailProduct);
    return state.detailProduct;
  }
};
export const actions = {
  getProducts({ commit }) {
    axios
      .get("http://localhost:8001/products")
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getBestProduct({ commit }) {
    axios
      .get("http://localhost:8001/best-products")
      .then(response => {
        commit("setBestProduct", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  searchProducts: ({ commit }, data) => {
    axios
      .get("http://localhost:8001/products?q=" + data)
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  getDetailProduct: ({ commit }, data) => {
    console.log("masuk");
    axios
      .get("http://localhost:8001/products/" + data)
      .then(response => {
        commit("setDetailProduct", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
export const mutations = {
  setBestProduct(state, data) {
    state.best_product = data;
  },
  setProducts(state, data) {
    state.products = data;
  },
  setDetailProduct(state, data) {
    state.detailProduct = data;
  }
};
