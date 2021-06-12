<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Fire Alert Status",
          icon: "ri-fire-fill",
          value: "0/9"
        },
        {
          title: "Water Alert Status",
          icon: "ri-water-flash-fill",
          value: "2/8"
        },
        {
          title: "Devices Connection",
          icon: "ri-router-line",
          value: "7/10"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-4" v-for="(data, index) in statData" :key="index">
      <div class="card" v-if="data.title == 'Water Alert Status'" style="background: #71CFFC">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2" style="color: white">{{data.title}}</p>
              <h4 class="mb-0" style="color: white">{{data.value}}</h4>
            </div>
            <div v-if="data.value == '0/8'" class="text-secondary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.value != '0/8' && data.icon =='ri-water-flash-fill' " class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.icon =='ri-router-line' " class="text-success">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card" v-if="data.title == 'Fire Alert Status'" style="background: #FF906C">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2" style="color: white">{{data.title}}</p>
              <h4 class="mb-0" style="color: white">{{data.value}}</h4>
            </div>
            <div v-if="data.value == '0/9'" class="text-secondary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.value != '0/9' && data.icon =='ri-fire-fill' " class="text-danger">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.value == '0/9' && data.icon =='ri-water-flash-fill' " class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.icon =='ri-router-line' " class="text-success">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card" v-if="data.title == 'Devices Connection'">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
              <h4 class="mb-0">{{data.value}}</h4>
            </div>
            <div v-if="data.value == 'off'" class="text-secondary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.value == 'on' && data.icon =='ri-fire-fill' " class="text-danger">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.value == 'on' && data.icon =='ri-water-flash-fill' " class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
            <div v-if="data.icon =='ri-router-line' " class="text-success">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>