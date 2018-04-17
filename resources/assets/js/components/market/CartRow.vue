<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-danger btn-sm" @click.prevent="removeFromCart"><i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-success btn-sm" @click.prevent="addToCart"><i class="fa fa-plus"></i></button>
        </div>
        <span>{{ product.quantity }} <strong>{{ product.name }}</strong></span>
        <span class="badge badge-primary badge-pill">{{ price }}&euro;</span>
    </li>
</template>

<script>
export default {
    props: ['id'],

    computed: {
        product() {
            return this.$store.state.cart.find(item => item.id === this.id);
        },

        price() {
            return (parseFloat(this.product.price) * parseInt(this.product.quantity)).toFixed(2);
        }
    },

    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', this.product);
        },

        removeFromCart() {
            this.$store.dispatch('removeFromCart', this.product);
        }
    }
}
</script>
