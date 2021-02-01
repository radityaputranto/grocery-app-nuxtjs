export const state = {
  cart: [],
  cart_lenght: 0
};
export const getters = {
  getCart: state => {
    return state.cart;
  }
};
export const actions = {
  getCart({ commit }) {
    if (localStorage.getItem("cart")) {
      try {
        commit("setCart", JSON.parse(localStorage.getItem("cart")));
      } catch (e) {
        //localStorage.removeItem("cart");
        console.log(e);
      }
    }
  },
  addCart: ({ commit }, data) => {
    state.cart.push(data);
    //this.dispatch("saveCart", state.cart);
    const parsed = JSON.stringify(state.cart);
    localStorage.setItem("cart", parsed);
  },
  deleteCart: ({ commit }, id) => {
    state.cart.splice(id, 1);
    const parsed = JSON.stringify(state.cart);
    localStorage.setItem("cart", parsed);
  }
  /*   saveCart(data) {
    const parsed = JSON.stringify(data);
    localStorage.setItem("cart", parsed);
  } */
};
export const mutations = {
  setCart(state, data) {
    state.cart = data;
  }
};
