<template>
  <div class="card">
    <div class="card-body">
      <b-tabs card>
        <b-tab title="Product List" active>
          <ProductList />
        </b-tab>
        <b-tab title="Order List">
          <OrderList />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-height: 500px;
}
</style>

