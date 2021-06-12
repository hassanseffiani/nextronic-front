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
    title: "Rooms",
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
      title: "Rooms",
      items: [
        {
          text: "Nextrack",
        },
        {
          text: "Rooms",
          active: true,
        },
      ],
      loader: false,
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
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <Transaction v-bind:devices="devices"/>
      </div>
    </div>
  </Layout>
</template>