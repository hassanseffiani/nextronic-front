<script>
/**
 * Revenue Analytics component
 */
export default {
  data() {
    return {
      series: [
        {
          name: "this week",
          type: "column",
          data: [31, 28, 29, 26, 29, 30, 27]
        },
        {
          name: "previous week",
          type: "line",
          data: [24, 26, 31, 28, 30, 24, 29]
        }
      ],
      chartOptions: {
        chart: {
          height: 280,
          type: "line",
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [0, 3],
          curve: "smooth"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%"
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: ["#5664d2", "#1cbb8c"],
        labels: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ]
      }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <!--<div class="float-right d-none d-md-inline-block">
        <div class="btn-group mb-2">
          <button type="button" class="btn btn-sm btn-light">Today</button>
          <button type="button" class="btn btn-sm btn-light active">Weekly</button>
          <button type="button" class="btn btn-sm btn-light">Monthly</button>
        </div>
      </div>-->
      <h4 class="card-title mb-4">Temperature Analytics</h4>
      <div>
        <div id="line-column-chart" class="apex-charts" dir="ltr"></div>
        <apexchart
          class="apex-charts"
          height="280"
          dir="ltr"
          :series="series"
          :options="chartOptions"
        ></apexchart>
      </div>
    </div>

    <div class="card-body border-top text-center">
      <div class="row">
        <!--<div class="col-sm-4">
          <div class="d-inline-flex">
            <h5 class="mr-2">$12,253</h5>
            <div class="text-success">
              <i class="mdi mdi-menu-up font-size-14"></i>2.2 %
            </div>
          </div>
          <p class="text-muted text-truncate mb-0">This month</p>
        </div>-->

        <div class="col-sm-6">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Week Average :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0 mr-2">28° C</h5>
              <!--<div class="text-success">
                <i class="mdi mdi-menu-up font-size-14"></i>9
              </div>-->
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-success font-size-10 mr-1"></i> Previous Week Average :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0">25° C</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>