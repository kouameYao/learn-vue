<template>
  <div>
    <page-header 
      title="Liste d'activites" 
      subTitle="Ici s'affiche la liste de toutes les activités">
    </page-header>
        <!-- Data Table area Start-->
    <div class="data-table-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="data-table-list">
                        <div class="basic-tb-hd">
                            <h2># Information</h2>
                            <p>Rafraîchissez la page pour voir les options de la table de données : Recherche, pagination...</p>
                        </div>
                        <div class="table-responsive">
                            <table id="data-table-basic" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Titre</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>2011/04/25</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>$170,750</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td>2009/01/12</td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Customer Support</td>
                                        <td>New York</td>
                                        <td>2011/01/25</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Titre</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Data Table area End-->
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
export default {
  name: "List",
  components: {
    PageHeader,
  }

};
</script>