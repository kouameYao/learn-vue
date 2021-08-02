<template>
  <div>
    <div>
      <page-header
        title="Création d'activites"
        subTitle="Formulaire de création d'une activité"
      >
      </page-header>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="form-example-wrap mg-t-30">
          <div class="form-example-int form-horizental">
            <div class="form-group">
              <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                  <label class="hrzn-fm">Note title</label>
                </div>
                <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                  <div class="nk-int-st">
                    <input
                      type="text"
                      class="form-control input-sm"
                      placeholder="Title"
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
                  <label class="hrzn-fm">Note content</label>
                </div>
                <div class="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                  <div class="nk-int-st">
                    <input
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
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
export default {
  name: "Create",
  components: {
    PageHeader,
  },
};
</script>