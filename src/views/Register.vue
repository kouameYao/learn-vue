<template>
  <!-- Login Register area Start-->
  <div class="login-content">
    <!-- Register -->
    <div class="nk-block toggled" id="l-register">
      <div class="nk-form">
        <div class="input-group">
          <span class="input-group-addon nk-ic-st-pro"
            ><i class="notika-icon notika-support"></i
          ></span>
          <div class="nk-int-st">
            <input type="text" class="form-control" placeholder="Username" />
          </div>
        </div>
        <div class="input-group mg-t-15">
          <span class="input-group-addon nk-ic-st-pro"
            ><i class="notika-icon notika-mail"></i
          ></span>
          <div class="nk-int-st">
            <input
              type="text"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
        </div>

        <div class="input-group mg-t-15">
          <span class="input-group-addon nk-ic-st-pro"
            ><i class="notika-icon notika-edit"></i
          ></span>
          <div class="nk-int-st">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
        </div>

        <a
          href="#l-login"
          data-ma-action="nk-login-switch"
          data-ma-block="#l-login"
          class="btn btn-login btn-success btn-float"
          ><i class="notika-icon notika-right-arrow"></i
        ></a>
      </div>

      <div class="nk-navigation rg-ic-stl">
        <a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-login"
          ><i class="notika-icon notika-right-arrow"></i>
          <span>
              <router-link to="/login">Connexion</router-link>
            </span>
        </a
        >
        <a
          href=""
          data-ma-action="nk-login-switch"
          data-ma-block="#l-forget-password"
          ><i>?</i> <span>
            
            <router-link to="/forgot-password">Mot de passe oublié</router-link>
            </span></a
        >
      </div>
    </div>
  </div>
  <!-- Login Register area End-->
</template>

<script>
export default {
  name: "Accueil",
};
</script>