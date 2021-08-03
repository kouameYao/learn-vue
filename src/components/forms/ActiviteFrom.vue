<template>

  <form @submit.prevent="createActivite">
      <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="form-example-wrap mg-t-30">
        <div class="form-example-int form-horizental">
          <div class="form-group">
            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                <label class="hrzn-fm" for="libelle">Note Libelle</label>
              </div>
              <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                <div class="nk-int-st">
                  <input
                    id="libelle"
                    v-model="form.libelle"
                    type="text"
                    class="form-control input-sm"
                    placeholder="Libelle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-example-int form-horizental mg-t-15">
          <div class="form-group">
            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                <label class="hrzn-fm" for="description">Note content</label>
              </div>
              <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                <div class="nk-int-st">
                  <input
                    id="description"
                    v-model="form.description"
                    type="text"
                    class="form-control input-sm"
                    placeholder="Content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-example-int mg-t-15">
          <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12"></div>
            <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
              <button class="btn btn-success notika-btn-success">
                Soumettre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import AuthService from "../../services/crud.service";
export default {
  name: "ActiviteForm",
  data() {
    return {
      form: {
        phase_id: "bbbaf7f7-7944-493d-a001-2b46c22de4d5",
        libelle: "Sarclage",
        description: "Activite de balayage de la parcelle B1",
      },
    };
  },
  methods: {
    createActivite() {
      let phase_id = this.form.phase_id;
      let libelle = this.form.libelle;
      let description = this.form.description;
      AuthService.createActivite({phase_id, libelle, description})
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
    },
  },
};
</script>

<style>
</style>