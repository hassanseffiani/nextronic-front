<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Max Temperature",
          icon: "ri-arrow-up-circle-fill",
          value: 35
        },
        {
          title: "Min Temperature",
          icon: "ri-arrow-down-circle-fill",
          value: 15
        },
        {
          title: "Number of alerts",
          icon: "ri-alert-fill",
          value: 196
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-4" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
              <h4 class="mb-0">{{data.value}}</h4>
            </div>
            <div v-if="data.icon == 'ri-arrow-down-circle-fill' " class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.icon != 'ri-arrow-down-circle-fill' " class="text-danger">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>

        <!--<div class="card-body border-top py-3">
          <div class="text-truncate">
            <span class="badge badge-soft-success font-size-11">
              <i class="mdi mdi-menu-up"></i>
              {{data.subvalue}}
            </span>
            <span class="text-muted ml-2">From previous period</span>
          </div>
        </div>-->
      </div>
    </div>
  </div>
  <!-- end row -->
</template>