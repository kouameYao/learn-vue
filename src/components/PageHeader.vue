<template>
  <div class="jumbotron text-center">
    <h2>{{ title }}</h2>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style>
</style>