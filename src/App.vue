<template>
  <div id="app">
    <!-- Start Header Top Area -->
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="logo-area">
              <a href="#"><img src="../public/img/logo/logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Top Area -->

    <!-- Nav Bar start -->
    <nav-bar></nav-bar>
    <!-- Nav Bar end-->

    <!-- Main Menu area start-->
    <div class="container">
      <router-view />
    </div>
    <!-- Main content end-->

    <!-- Footer start -->
    <page-footer></page-footer>
    <!-- Footer end -->

  </div>
</template>

<script>

import PageFooter from './partials/PageFooter.vue';
import NavBar from './partials/NavBar.vue';
export default {
  name: "App",
  components: {
    PageFooter,
    NavBar,
  }

};
</script>

<style>
</style>
