<script>
/**
 * Revenue Analytics component
 */
export default {
  data() {
    return {
      chartOptions: {
        chart: {
            animations: {
              enabled: false,
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#F35B87', '#34c38f', '#F35B87', '#1AAD4A', '#EDF624', '#FDB525'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2, 2, 2, 2],
            curve: 'straight'
        },
        title: {
            text: 'Average Data Received',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f1f1'
        },/* 
        markers: {
            style: 'inverted',
            size: 6
        }, */
        xaxis: {
            categories: ['00','01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            title: {
                text: 'Seconde'
            }
        },
        yaxis: {
            title: {
                text: 'Received Data (kB)'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }],
      },
      series: [
      {
          name: "#85765",
          data: [25, 26, 27, 28, 27, 27, 26, 25, 27, 29]
      }
      ],
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
      <h4 class="card-title mb-4">Data Analytics</h4>
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

    <!--<div class="card-body border-top text-center">
      <div class="row">
        <div class="col-sm-4">
          <div class="d-inline-flex">
            <h5 class="mr-2">$12,253</h5>
            <div class="text-success">
              <i class="mdi mdi-menu-up font-size-14"></i>2.2 %
            </div>
          </div>
          <p class="text-muted text-truncate mb-0">This month</p>
        </div>

        <div class="col-sm-6">
          <div class="mt-4 mt-sm-0">
            <p class="mb-2 text-muted text-truncate">
              <i class="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Week Average :
            </p>
            <div class="d-inline-flex">
              <h5 class="mb-0 mr-2">28° C</h5>
              <div class="text-success">
                <i class="mdi mdi-menu-up font-size-14"></i>9
              </div>
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
    </div> -->
  </div>
</template>