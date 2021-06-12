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
          value: "Casa Data Center"
          //icon: "ri-arrow-up-circle-fill",
        }
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
    <div class="row">
      <div class="col-md-12" v-for="(data, index) in statData" :key="index">
        <div class="card" style="height: 260px">
          <div class="card-body">
            <div class="media">
              <div class="media-body overflow-hidden">
                <!-- <p class="text-truncate font-size-14 mb-2">{{data.title}}</p> -->
                <h4 class="card-title mb-4 mt-4">{{data.title}}</h4>
                <h4 class="mb-0" >{{data.value}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- end row -->
</template>