<template>
    <div class="col-4">
        <div class="card mb-3">
            <div class="card-header">{{ data.name }}</div>
            <div class="card-body d-flex justify-content-between align-items-center">
                <h4>{{ data.price }}&euro;</h4>
                <button type="button" class="btn btn-primary btn-sm" @click.prevent="addToCart">
                    <i class="fa fa-shopping-cart"></i> Ajouter
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],

    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', this.data);
        }
    }
}
</script>
