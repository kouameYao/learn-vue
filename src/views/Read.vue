<template>
  <div>
    <page-header
      title="Détails d'activité"
      subTitle="Visualisation des données d'une activité"
    >
    </page-header>
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Title note</h5>
        <p class="card-text">
          Description de la note ...text below as a natural lead-in to additional content.
        </p>
        <router-link to="/list">Retour</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
export default {
  name: "Read",
  components: {
    PageHeader,
  },
};
</script>