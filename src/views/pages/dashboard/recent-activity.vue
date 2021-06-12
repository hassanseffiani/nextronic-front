<script>
/**
 * Recent activity component
 */
export default {
  data() {
    return {
      activityData: [
        {
          icon: "ri-alert-fill",
          date: "27 May, 2021 ",
          time: "18:50 pm",
          title: "High Temperature detected",
          place: "Casablanca Data Center"
        },
        {
          icon: "ri-alert-fill",
          date: "27 may, 2021 ",
          time: "16:41 pm",
          title: "High Temperature detected",
          place: "Casablanca Data Center"
        },
        {
          icon: "ri-alert-fill",
          date: "17 Apr, 2020 ",
          time: "05:10 pm",
          title: "Responded to need “In-Kind Opportunity”"
        },
        {
          icon: "ri-calendar-2-fill",
          date: "07 Apr, 2020",
          time: "12:47 pm",
          title: "Created need “Volunteer Activities”"
        },
        {
          icon: "ri-alert-fill",
          date: "05 Apr, 2020 ",
          time: "03:09 pm",
          title: "Attending the event “Some New Event”"
        },
        {
          icon: "ri-alert-fill",
          date: "02 Apr, 2020 ",
          time: "12:07 am",
          title: "Responded to need “In-Kind Opportunity”"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <!--<b-dropdown right toggle-class="arrow-none card-drop" class="float-right" variant="white">
        <template v-slot:button-content>
          <i class="mdi mdi-dots-vertical"></i>
        </template>
        <b-dropdown-item>Sales Report</b-dropdown-item>
        <b-dropdown-item>Export Report</b-dropdown-item>
        <b-dropdown-item>Profit</b-dropdown-item>
        <b-dropdown-item>Action</b-dropdown-item>
      </b-dropdown>-->

      <h4 class="card-title mb-4">Last Alerts</h4>

      <div data-simplebar style="max-height: 160px;">
        <ul class="list-unstyled activity-wid">
          <li class="activity-list" v-for="(data, index) in activityData" :key="index">
            <div class="activity-icon avatar-xs">
              <span class="avatar-title bg-soft-danger text-danger rounded-circle">
                <i :class="`${data.icon}`"></i>
              </span>
            </div>
            <div>
              <div>
                <h5 class="font-size-13">
                  {{data.date}}
                  <small class="text-muted">{{data.time}}</small>
                </h5>
              </div>
              <div>
                <p class="text-muted mb-0">{{data.place}}</p>
              </div>
              <div>
                <p class="text-muted mb-0">{{data.title}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>