<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title">
        <h4>Reviews</h4>
      </div>
      <div class="row">
        <div class="col-md-10 ml-auto col-xl-6 mr-auto">
          <p class="category">Tabs with Icons on Card</p>
          <!-- Nav tabs -->
          <card>
            <tabs
              slot="raw-content"
              tab-content-classes="tab-content-padding text-center">            
              <tab-pane>
                <template slot="label">
                   Reviews
                </template>
                <p>
                </p>
              </tab-pane>
            </tabs>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import  Card  from '../components/Card'
import Tabs from '../components/Tabs2'
import TabPane  from '../components/Tab';

export default {
  components: {
    Card,
    Tabs,
    TabPane
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
