import Vuex from "vuex";
import axios from "axios";

export const state = {
  best_product: [],
  products: [],
  search: ""
};
export const getters = {
  getBestProduct: state => {
    return state.best_product;
  },
  getProducts: state => {
    return state.products;
  }
  /* searchProducts: state => id => {
    console.log(id);
    return "";
    //return state.things.find(thing => thing.id === id)
  } */
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
  }
};
export const mutations = {
  setBestProduct(state, data) {
    state.best_product = data;
  },
  setProducts(state, data) {
    state.products = data;
  }
};
