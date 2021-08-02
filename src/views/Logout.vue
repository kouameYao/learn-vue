<template>
  <div>
    <!-- 404 Page area Start-->
    <div class="error-page-area">
      <div class="error-page-wrap">
        <i class="notika-icon notika-close" style="color : red !important"></i>
        <h2 style="color : red !important">DECONNEXION !!!</h2>
        <p>Attention, vous allez-vous deconnecter.</p>
        <button :click="logout"> Me déconnecter</button>
      </div>
    </div>
    <!-- 404 Page area End-->
  </div>
</template>

<script>
export default {
  methods: {
    logout:  function() {
      localStorage.removeItem("token");
    },
  },
};
</script>

<style>
</style>