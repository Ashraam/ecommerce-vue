<template>
    <aside>
        <div class="top">
            <h2 class="display-6 text-center">Mon panier</h2>

            <p class="alert alert-warning m-0" v-if="cart.length <= 0"><i class="fa fa-exclamation-triangle"></i> Votre pannier est vide</p>

            <ul class="list-group" v-if="cart.length > 0">
                <cart-row v-for="product in cart" :id="product.id" :key="product.id"></cart-row>
            </ul>
        </div>
        <div class="bottom d-flex flex-column justify-content-end">
            <p class="alert alert-warning m-0 py-1 text-center text-small mb-1" v-if="cart.length > 0 && total < 40"><i class="fa fa-exclamation-triangle"></i> Panier minimum de 40&euro;</p>
            <button type="button" class="btn btn-success btn-block" :disabled="total < 40"><i class="fa fa-credit-card"></i> Passer ma commande</button>
        </div>
    </aside>
</template>

<script>
import CartRow from './CartRow.vue';

export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },

        total() {
            if(this.cart.length <= 0) {
                return 0;
            }

            return this.cart.reduce((total, item) => {
                return total + (parseInt(item.quantity) * parseFloat(item.price));
            }, 0).toFixed(2);
        }
    },

    components: {
        CartRow
    }
}
</script>

