<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Status",
          //icon: "ri-arrow-up-circle-fill",
          value: "Connected"
        },
        /*{
          title: "Number of alerts",
          icon: "ri-alert-fill",
          value: 196
        }*/
      ],
      statData1: [
        {
          title: "Battery",
          icon: "ri-battery-charge-fill",
          value: "75%"
        },
        {
          title: "IP Address",
          //icon: "ri-battery-charge-fill",
          value: "123.114.12.10"
        },
      ]
      
    };
  }
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-md-4" v-for="(data, index) in statData" :key="index">
        <div v-if="data.title == 'Status'" class="card" style="background: green">
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
      <div class="col-md-4" v-for="(data, index) in statData1" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <div class="media-body overflow-hidden">
                <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
                <h4 class="mb-0">{{data.value}}</h4>
              </div>
              <div v-if="data.icon == 'ri-battery-charge-fill' " class="text-secondary">
                <i :class="`${data.icon}`" style="font-size: 34px"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  <!-- end row -->
</template>