<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Transaction from './transaction';
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
    title: "Locaux Techniques",
    meta: [{ name: "description" }],
  },
  created() {
    this.getAll();
  },
  components: {
    Layout,
    PageHeader,
    Transaction
  },
  data() {
    return {
      devicesData: [],
      title: "Locaux Techniques",
      items: [
        {
          text: "Nextrack",
        },
        {
          text: "Locaux Techniques",
          active: true,
        },
      ],
      loader: false,
      markers: [
        {
          position: { lat: 33.585314, lng: -7.584968 },
        },
        {
          position: { lat: 33.595314, lng: -7.589968 }
        },
        {
          position: { lat: 33.555314, lng: -7.555968 }
        },
        {
          position: { lat: 33.535314, lng: -7.580968 }
        },
        {
          position: { lat: 33.545314, lng: -7.650968 }
        },
        {
          position: { lat: 33.575314, lng: -7.600968 }
        }
      ],
      image: "http://maps.google.com/mapfiles/kml/pal3/icon47.png",
      titlee: "Casa Data Center"
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
    toLocal() {
      this.$router.push("/devices")
    }
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
      
      <div class="col-lg-6">
        <Transaction v-bind:devices="devices"/>
        
      </div>
      <div class="col-lg-6">
        <div class="card" style="height: 647px">
          <div class="card-body">
            <!-- <h4 class="card-title">Markers</h4>
            <p class="card-title-dsec">Example of google maps.</p> -->
            <!-- Map with markers -->
            <gmap-map :center="{ lat: 33.585314, lng: -7.584968 }" :zoom="10" style="height: 600px">
              <gmap-marker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                :icon=image
                :title="titlee"
                @click="toLocal()"
              ></gmap-marker>
            </gmap-map>
            <!-- <img src="@/assets/images/capture.png" width="353" style="position: absolute;">
            <img src="@/assets/images/marker.png" width="30" style="position: absolute; margin-left: 150px; margin-top: 180px"> -->
          </div>
        </div>
        <!--<ul>
          <li v-for="(anl,index) in dayAnl" :key="index">
            {{anl}}
          </li>
        </ul>-->
      </div>
    </div>
  </Layout>
</template>