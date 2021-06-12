<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import TableAlerts from './table-alerts.vue';


export default {
  page: {
    title: "Alerts",
    meta: [{ name: "Alerts" }],
  },
  components: {Layout, PageHeader, TableAlerts },
  data() {
    return {
    title: "Alerts",
      items: [
        {
          text: "Nextrack",
        },
        {
          text: "Alerts",
          active: true,
        },
      ]
    };
  },
  methods: {
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="app-calendar">
              <TableAlerts />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>