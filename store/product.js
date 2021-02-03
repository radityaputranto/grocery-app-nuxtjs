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
    this.$axios
      .get("products")
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getBestProduct({ commit }) {
    this.$axios
      .get("best-products")
      .then(response => {
        commit("setBestProduct", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  searchProducts: function({ commit }, data) {
    this.$axios
      .get("products?q=" + data)
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  getDetailProduct: function({ commit }, data) {
    this.$axios
      .get("products/" + data)
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
