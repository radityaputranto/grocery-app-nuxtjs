<template>
  <div class="card">
    <div>
      <b-card
        :title="product.nama"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
        border-variant="light"
      >
        <b-card-text> Some quick example text to. </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product']
}
</script>