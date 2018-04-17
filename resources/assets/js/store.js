import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: []
    },

    mutations: {
        addProduct(state, payload) {
            const index = state.cart.findIndex(item => item.id === payload.id);

            if(index === -1) {
                payload.quantity = 1;
            } else {
                payload.quantity = state.cart[index].quantity + 1;
                state.cart.splice(index, 1);
            }

            state.cart.push(payload);
        },

        removeProduct(state, payload) {
            const product = state.cart.find(item => item.id === payload.id);
            const index = state.cart.findIndex(item => item.id === payload.id);

            product.quantity--;

            if(product.quantity <= 0) {
                state.cart.splice(index, 1);
            }
        }
    },

    actions: {
        addToCart({ commit }, product) {
            commit('addProduct', product);
        },

        removeFromCart({ commit }, product) {
            commit('removeProduct', product);
        }
    }
});

export default store;