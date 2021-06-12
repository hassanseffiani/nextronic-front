<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Transaction from './transaction';
//import Sources from "./sources";
import SalesAnalytics from "./sales-analytics";
import RevenueAnalytics from "./revenue";
//import RevenueAnalytics1 from "./revenue1";

import Stat from "./widget";
/**
 * Devices component
 */

import {
  devicesMethods,
  layoutComputed,
  //devicesComputed,
} from "@/state/helpers";

export default {
  page: {
    title: "Devices Casablanca Data-Center",
    meta: [{ name: "description" }],
  },
  created() {
    this.getAll();
  },
  components: {
    Layout,
    PageHeader,
    Transaction,
    //Sources,
    Stat,
    RevenueAnalytics,
    SalesAnalytics
    /* RevenueAnalytics1, */
  },
  data() {
    return {
      /* chartOptions: {
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
        },
        series: [{
          name: 'series-1',
          data: this.dayAnl()
        }], */
      title: "Devices",
      items: [
        {
          text: "Nextrack",
        },
        {
          text: "Devices",
          active: true,
        },
      ],
      loader: false,
      markers: [
        {
          position: { lat: 33.585314, lng: -7.584968 }
        }
      ],
      image: "http://maps.google.com/mapfiles/kml/pal3/icon47.png"
    };
  },
  computed: {
    ...layoutComputed,

    devices(){
      let data = this.$store.getters['devices/devices'];
      /* if (this.devicesData.lenght > 0){
        this.loader = false
      } */
      return data
    },
    dayAnl(){
      let data = this.$store.getters['devices/dayAnalytics'];
      /* if (this.devicesData.lenght > 0){
        this.loader = false
      } */
      return data
    }
  },
  methods: {
    ...devicesMethods,

    getAll(){
      this.getDevices()
      this.dayAnalytics()
    },
    
    
  },
  mounted() {
    if (this.loader == true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <!--<div id="preloader">
      <div id="status">
        <div class="spinner">
          <i class="ri-loader-line spin-icon"></i>
        </div>
      </div>
    </div>-->
    <div class="row">
      <div class="col-lg-8">
        <Stat />
        <RevenueAnalytics />
        <Transaction v-bind:devices="devices"/>
        <!--<ul>
          <li v-for="(anl,index) in dayAnl" :key="index">
            {{anl}}
          </li>
        </ul>-->
      </div>
      <div class="col-lg-4">
        <!-- <Sources v-bind:dayAnalytics="dayAnl" v-if='dayAnalytics'/> -->
        <Sales-analytics />
        <!-- <apexchart 
          width="80" 
          type="line" 
          :options="chartOptions" 
          :series="series" 
          class="apex-charts"          
          height="35"
          dir="ltr"/> -->
        <div class="card" style="height: 680px">
          <div class="card-body">
            <!-- <h4 class="card-title">Markers</h4>
            <p class="card-title-dsec">Example of google maps.</p> -->
            <!-- Map with markers -->
            <gmap-map :center="{ lat: 33.585314, lng: -7.584968 }" :zoom="10" style="height: 640px">
              <gmap-marker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                :icon=image
                @click="center = m.position"
              ></gmap-marker>
            </gmap-map>
            <!-- <img src="@/assets/images/capture.png" width="353" style="position: absolute;">
            <img src="@/assets/images/marker.png" width="30" style="position: absolute; margin-left: 150px; margin-top: 180px"> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-lg-12">
        <RevenueAnalytics />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <RevenueAnalytics1 />
      </div>
    </div> -->
  </Layout>
</template>