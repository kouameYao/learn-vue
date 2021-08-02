<template>
  <!-- Login Register area Start-->
  <div class="login-content">
    <!-- Login -->
    <div class="nk-block toggled" id="l-login">
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
        <div class="fm-checkbox">
          <label
            ><input type="checkbox" class="i-checks" /> <i></i> Keep me signed
            in</label
          >
        </div>
        <a
          href="#l-register"
          data-ma-action="nk-login-switch"
          data-ma-block="#l-register"
          class="btn btn-login btn-success btn-float"
          ><i class="notika-icon notika-right-arrow right-arrow-ant"></i
        ></a>
      </div>

      <div class="nk-navigation nk-lg-ic">
        <a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-register"
          ><i class="notika-icon notika-plus-symbol"></i>
          <span>
              <router-link to="/register"> S'enregistrer</router-link>
            
            </span></a
        >
        <a
          href="#"
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
import AuthService from '../services/auth.service';
export default {
  name: "Accueil",
  data() {
    return {
      form: {
        'email' : 'pareyacouba@gmail.com',
        'password' : '123456@password',
        'device_name' : 'web-client'
      }
    }
  },

  methods: {
    login() {
      AuthService.login(this.form).then(response => {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        console.log(":::>>>>", response.data);
      });
    }
  },

  created() {
    this.login(); 
  }
};
</script>