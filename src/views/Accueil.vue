<template>
  <div>
    <!-- Breadcomb area Start-->
    <div class="breadcomb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="breadcomb-list">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="breadcomb-wp">
                    <div class="breadcomb-icon">
                      <i class="notika-icon notika-windows"></i>
                    </div>
                    <div class="breadcomb-ctn">
                      <h2>Bienvenue à Map</h2>
                      <p>
                       Voici les statistique relative à vos activités sur la plateforme
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-3">
                  <div class="breadcomb-report">
                    <button
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Download Report"
                      class="btn"
                    >
                      <i class="notika-icon notika-sent"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcomb area End-->

    <!-- Main Menu area End-->
    <statistique></statistique>
    <!-- Main content start -->
  </div>
</template>

<script>
import Statistique from "../components/Statistique.vue";
export default {
  name: "Accueil",
  components: {
    Statistique,
  },
};
</script>