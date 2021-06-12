<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Local Assignment",
          local: "Casa Data Center"
          //icon: "ri-arrow-up-circle-fill",
        },
        /*{
          title: "Number of alerts",
          icon: "ri-alert-fill",
          value: 196
        }*/
      ],
      
    };
  }
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-md-4" v-for="(data, index) in statData" :key="index">
        <div v-if="data.title == 'Status'" class="card">
          <div class="card-body">
            <div class="media">
              <div class="media-body overflow-hidden">
                <p class="text-truncate font-size-14 mb-2" style="color: white">{{data.title}}</p>
                <h4 class="mb-0" style="color: white">{{data.value}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  <!-- end row -->
</template>