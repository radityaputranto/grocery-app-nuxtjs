<template>
<div>
    <b-breadcrumb :items="link"></b-breadcrumb>
</div>
  
</template>

<script>
  export default {
      props: ['link'],
    data() {
      return {
      }
    },
    
  }
  
</script>