<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
          series: [29],
          MinSeries: [25],
          MaxSeries: [32],
          MaxChartOptions: {
            colors: ["#EF1929"],
            chart: {
              height: 350,
              type: 'radialBar',
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                  name: {
                    fontSize: '16px',
                    fill: "#000",
                    color: "#000",
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: "#000",
                    formatter: function (val) {
                      return val;
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
              dashArray: 4
            },
            labels: ['Max'],
          },
          MinChartOptions: {
            colors: ["#19C31C"],
            chart: {
              height: 350,
              type: 'radialBar',
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                  name: {
                    fontSize: '16px',
                    fill: "#000",
                    color: "#000",
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: "#000",
                    formatter: function (val) {
                      return val;
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
              dashArray: 4
            },
            labels: ['Min'],
          },
          chartOptions: {
            colors: ["#EF1929"],
            chart: {
              height: 350,
              type: 'radialBar',
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                  name: {
                    fontSize: '16px',
                    fill: "#000",
                    color: "#000",
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: "#000",
                    formatter: function (val) {
                      return val;
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
              dashArray: 4
            },
            labels: ['Temperature'],
          },


          series1: [40],
          chartOptions1: {
            chart: {
              type: 'radialBar',
              offsetY: -10,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  style:{
                    colors: "#FFF"
                  },
                  name: {
                    fontSize: '16px',
                    colors: "#000",
                    offsetY: 75
                  },
                  value: {
                    offsetY: 30,
                    fontSize: '22px',
                    color: "#000",
                    formatter: function (val) {
                      return val;
                    }
                  }
                }
              }
            },
            grid: {
              padding: {
                top: -10
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels: ['Humidity'],
          }


    };
  }
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4 mt-3">
                <div class="mt-5">
                  <apexchart
                    class="apex-charts"
                    type="radialBar"
                    height="140" 
                    :options="MinChartOptions" 
                    :series="MinSeries"
                  ></apexchart>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="mb-2">
                  <apexchart
                    class="apex-charts"
                    type="radialBar" 
                    height="320" 
                    :options="chartOptions" 
                    :series="series"
                  ></apexchart>
                </div>
              </div>
              <div class="col-sm-4 mt-3">
                <div class="mt-5">
                  <apexchart
                    class="apex-charts"
                    type="radialBar" 
                    height="140" 
                    :options="MaxChartOptions" 
                    :series="MaxSeries"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> 
  </Layout>
  <!-- end row -->
</template>