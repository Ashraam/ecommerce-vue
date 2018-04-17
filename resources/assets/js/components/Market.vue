<template>
    <div class="market">
        <main class="container-fluid">
            <h1 class="display-5">Tous nos produits</h1>

            <div class="alert alert-info text-center" v-if="loading">
                <h3 class="m-0">Chargement des produits en cours <i class="fa fa-spinner fa-spin"></i></h3>
            </div>

            <div class="row">
                <product v-for="product in products" :data="product" :key="product.id"></product>
            </div>
        </main>

        <cart></cart>
    </div>
</template>

<script>
import Product from './market/Product.vue';
import Cart from './market/Cart.vue';

export default {
    data() {
        return {
            loading: false,
            products: []
        }
    },

    components: {
        Product,
        Cart
    },

    mounted() {
        this.loading = true;
        axios.get('api/products').then(response => {
            this.products = response.data;
            this.loading = false;
        });
    }
}
</script>

