<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import RevenueAnalytics from './revenue';

/**
 * Calendar component
 */
export default {
  page: {
    title: "Statistics",
    meta: [{ name: "description" }],
  },
  components: {
    Layout,
    PageHeader,
    RevenueAnalytics
  },
  data() {
    return {
      title: "Statistics",
      items: [
        {
          text: "Nextrack",
        },
        {
          text: "Statistics",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <RevenueAnalytics />
      </div>
    </div>
  </Layout>
</template>