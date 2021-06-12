<script>
/**
 * Sources Component
 */
export default {
  props: ["dayAnalytics"],
  computed: {
    
  },
  
  data() {
    let data1 = [28, 32, 27, 34, 27, 30, 29, 27, 26, 29, 31, 30, 28, 29, 27, 26, 25, 29, 28, 30, 31, 29, 29, 28]
    let data2 = [26, 28, 27, 29, 27, 25, 28, 30, 31, 28, 27, 27, 28, 30, 29, 28, 29, 31, 29, 27, 26, 28, 30, 29]
    return {
      source1: {
        series: [
          {
            data: data1
            //data: this.dayAnalytics
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#cc2f4c"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        }
      },
      source2: {
        series: [
          {
            data: data2
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#5664d2"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        }
      },
      source3: {
        series: [
          {
            data: [42, 31, 42, 34, 46, 38, 44, 36, 42, 32, 54]
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#5664d2"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                }
              }
            },
            marker: {
              show: false
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

      <h4 class="card-title mb-3">Day analytics</h4>

      <div>
        <!--<div class="text-center">
          <p class="mb-2">Total sources</p>
          <h4>$ 7652</h4>
          <div class="text-success">
            <i class="mdi mdi-menu-up font-size-14"></i>2.2 %
          </div>
        </div>-->

        <div class="table-responsive mt-4">
          <table class="table table-hover mb-2 table-centered table-nowrap">
            <tbody>
              <tr>
                <td style="width: 60px;">
                  <div class="avatar-xs">
                    <div class="avatar-title rounded-circle bg-danger">
                      <!--<img src="@/assets/images/companies/img-1.png" alt height="20" />-->
                      <i class="ri-temp-hot-line"></i>
                    </div>
                  </div>
                </td>

                <td>
                  <h5 class="font-size-14 mb-0">Temperature</h5>
                </td>
                <td>
                  <apexchart
                    id="chart1"
                    class="apex-charts"
                    height="35"
                    dir="ltr"
                    :series="source1.series"
                    :options="source1.chartOptions"
                    type="line"
                    width="80"
                  ></apexchart>
                </td>
                <!--<td>
                  <p class="text-muted mb-0">$ 2478</p>
                </td>-->
              </tr>
              <tr>
                <td>
                  <div class="avatar-xs">
                    <div class="avatar-title rounded-circle bg-primary">
                     <!--  <img src="@/assets/images/companies/img-2.png" alt height="20" /> -->
                      <i class="ri-water-flash-line"></i>
                    </div>
                  </div>
                </td>
                <td>
                  <h5 class="font-size-14 mb-0">Humidity</h5>
                </td>

                <td>
                  <apexchart
                    class="apex-charts"
                    height="35"
                    dir="ltr"
                    :series="source2.series"
                    :options="source2.chartOptions"
                    type="line"
                    width="80"
                  ></apexchart>
                </td>
                <!--<td>
                  <p class="text-muted mb-0">$ 2625</p>
                </td>-->
              </tr>
              <!--<tr>
                <td>
                  <div class="avatar-xs">
                    <div class="avatar-title rounded-circle bg-light">
                      <img src="@/assets/images/companies/img-3.png" alt height="20" />
                    </div>
                  </div>
                </td>
                <td>
                  <h5 class="font-size-14 mb-0">Source 3</h5>
                </td>
                <td>
                  <apexchart
                    class="apex-charts"
                    height="35"
                    dir="ltr"
                    :series="source3.series"
                    :options="source3.chartOptions"
                    type="line"
                    width="80"
                  ></apexchart>
                </td>
                <td>
                  <p class="text-muted mb-0">$ 2856</p>
                </td>
              </tr>-->
            </tbody>
          </table>
        </div>

        <!--<div class="text-center mt-4">
          <a href="#" class="btn btn-primary btn-sm">View more</a>
        </div>-->
      </div>
    </div>
  </div>
</template>