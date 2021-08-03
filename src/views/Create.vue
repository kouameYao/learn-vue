<template>
  <div>
    <div>
      <page-header
        title="Création d'activites"
        subTitle="Formulaire de création d'une activité"
      >
      </page-header>
    </div>
    <activite-form></activite-form>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ActiviteForm from "../components/forms/ActiviteFrom.vue";
export default {
  name: "Create",
  components: {
    PageHeader,
    ActiviteForm,
  },
  data() {
    return {
      form: {

      }
    }
  },
};
</script>