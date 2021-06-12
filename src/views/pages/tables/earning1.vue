<script>
/**
 * Earning Reports component
 */
export default {
  data() {
    return {
      WeeklyEarning: {
        options : {
          chart: {
          height: 100,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -130,
            endAngle: 130,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 3
        },
        labels: ['Median Ratio'],
        },
        series: [33],
        chartOptions: {
          chart: {
            type: "radialBar",
            wight: 60,
            height: 60,
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#4232F3"],
          stroke: {
            lineCap: "round"
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "70%"
              },
              track: {
                margin: 0
              },
              dataLabels: {
                show: false
              }
            }
          }
        }
      },
      monthlyEarning: {
        series: [49],
        chartOptions: {
          chart: {
            type: "radialBar",
            wight: 60,
            height: 60,
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#4232F3"],
          stroke: {
            lineCap: "round"
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "70%"
              },
              track: {
                margin: 0
              },

              dataLabels: {
                show: false
              }
            }
          }
        }
      }
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

      <!-- <h4 class="card-title mb-4">Humidity Devices Status</h4> -->
      <div class="text-center">
        <div class="row">
          <div class="col-sm-6">
            <div>
              <div class="mb-3">
                <apexchart
                  class="apex-charts"
                  height="60"
                  wight="60"
                  dir="ltr"
                  :series="WeeklyEarning.series"
                  :options="WeeklyEarning.chartOptions"
                ></apexchart>
              </div>
              <p class="text-muted text-truncate mb-2">Min. Humidity</p>
              <h5 class="mb-0">33</h5>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="mt-5 mt-sm-0">
              <div class="mb-3">
                <apexchart
                  class="apex-charts"
                  height="60"
                  wight="60"
                  dir="ltr"
                  :series="monthlyEarning.series"
                  :options="monthlyEarning.chartOptions"
                ></apexchart>
              </div>

              <p class="text-muted text-truncate mb-2">Max. Humidity</p>
              <h5 class="mb-0">49</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>