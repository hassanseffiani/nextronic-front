<script>
/**
 * Revenue Analytics component
 */
export default {
  data() {
    return {
      series: [
        {
          name: "2020",
          type: "column",
          data: [3, 2, 5, 7, 8, 9, 6, 7, 9, 2, 2, 6]
        },
        {
          name: "2019",
          type: "line",
          data: [2, 9, 3, 1, 6, 4, 6, 1, 7, 9, 10, 3]
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
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
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
              <i class="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Year :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0 mr-2">9° C</h5>
              <!--<div class="text-success">
                <i class="mdi mdi-menu-up font-size-14"></i>9
              </div>-->
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-success font-size-10 mr-1"></i> Previous Year :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0">8° C</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>