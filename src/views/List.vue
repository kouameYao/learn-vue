<template>
  <div class="container">
    <page-header 
      title="Liste d'activites" 
      subTitle="Ici s'affiche la liste de toutes les activités">
    </page-header>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
export default {
  name: "List",
  components: {
    PageHeader,
  }

};
</script>