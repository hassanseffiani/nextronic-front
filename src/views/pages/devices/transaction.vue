<script>
/**
 * Transactions component
 */
import {
  layoutMethods,
} from "@/state/helpers";
export default {
  props: ["devices"],
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 6,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
      sortBy: "Serial",
      sortDesc: false,
      fields: [
        { key: "serial", sortable: false, label: "Serial" },
        {key: "type", sortable: false, label: "Type"},
        { key: "temp", sortable: false, label: "Temperature" },
        { key: "humidity", sortable: false, label: "Humidity" },
        { key: "status", sortable: false, label: "Status" },
        //{ key: "paymentstatus", sortable: true, label: "Payment Status" },
        { key: "action" }
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.devices.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.devices.length;
  },
  methods: {
    ...layoutMethods,
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to upTemp the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<template>
  <div class="card" style="height: 590px">
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

      <h4 class="card-title mb-4 mt-4">Devices Status | Casablanca Data-Center</h4>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <!-- <div id="tickets-table_length" class="dataTables_length">
            <label class="d-inline-flex align-items-center">
              Show&nbsp;
              <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
            </label>
          </div> -->
        </div>
        <!-- Search -->
        <div class="col-sm-12 col-md-6">
          <div id="tickets-table_filter" class="dataTables_filter text-md-right">
            <label class="d-inline-flex align-items-center">
              Rechercher:
              <b-form-input
                v-model="filter"
                type="search"
                class="form-control form-control-sm ml-2"
              ></b-form-input>
            </label>
          </div>
        </div>
        <!-- End search -->
      </div>
      <div class="table-responsive mt-3">
        <b-table
          :items="devices"
          :fields="fields"
          responsive="sm"
          :per-page="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
        >

          <template v-slot:cell(status)="row">
            <div
              class="badge font-size-12"
              :class="
              {
                'badge-soft-success': `${row.value}` === 'Connected',
                'badge-soft-danger': `${row.value}` === 'Disconnected'
              }"
            >{{ row.value}}</div>
          </template>

          <template v-slot:cell(action)>
            <a
              href="/temp-humid-device"
              class="mr-3 text-primary"
              v-b-tooltip.hover
              data-toggle="tooltip"
              title="View"
            >
              <i class="mdi mdi-eye-outline font-size-18"></i>
            </a>
          </template>

        </b-table>
      </div>
      <div class="row">
        <div class="col">
          <div class="dataTables_paginate paging_simple_numbers float-right">
            <ul class="pagination pagination-rounded mb-0">
              <!-- pagination -->
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
            </ul>
          </div>
        </div>
      </div>
      <!--<ul>
        <li v-for="device in devices" :key="device.serial">
          <span>
            {{device.temp}}
          </span>
        </li>
      </ul>-->
    </div>
  </div>
</template>