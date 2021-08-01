<template>
      <div class="main-menu-area mg-tb-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul class="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
              
              <li class="active">
                <a data-toggle="tab" href="#Interface">
                  <i class="notika-icon notika-edit"></i>
                  <router-link to="/">Accueil</router-link>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#Interface">
                  <i class="notika-icon notika-edit"></i>
                  <router-link to="/list">list</router-link>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#Interface">
                  <i class="notika-icon notika-edit"></i>
                  <router-link to="/create">create</router-link>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#Interface">
                  <i class="notika-icon notika-edit"></i>
                  <router-link to="/read">read</router-link>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#Interface">
                  <i class="notika-icon notika-edit"></i>
                  <router-link to="/update">Update</router-link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style>

</style>