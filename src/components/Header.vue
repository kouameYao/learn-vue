<template>
  <div class="jumbotron">
   <h3> {{ title }} </h3>
   <p> {{ subTitle }} </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    subTitle: String
  }
}
</script>