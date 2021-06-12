<script>
/**
 * Transactions component
 */
import {
  layoutMethods,
} from "@/state/helpers";
export default {
  //props: ["devices"],
  data() {
    return {
      devices: [
        {
          Title: "Data Center Casablanca",
          City: "Casablanca",
          NbDevices: "6",
          Temperature: "27",
          Humidity: "40"
        },
        {
          Title: "Local technique 2",
          City: "Casablanca",
          NbDevices: "8",
          Temperature: "30",
          Humidity: "45"
        },
        {
          Title: "Local technique 3",
          City: "Casablanca",
          NbDevices: "5",
          Temperature: "29",
          Humidity: "38"
        },
        {
          Title: "Local technique 4",
          City: "Casablanca",
          NbDevices: "6",
          Temperature: "29",
          Humidity: "41"
        },
        {
          Title: "Local technique 5",
          City: "Casablanca",
          NbDevices: "9",
          Temperature: "28",
          Humidity: "39"
        },
        {
          Title: "Lcoal technique 6",
          City: "Casablanca",
          NbDevices: "7",
          Temperature: "31",
          Humidity: "45"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
      sortBy: "City",
      sortDesc: false,
      fields: [
        { key: "Title", sortable: false, label: "Title" },
        { key: "City", sortable: false, label: "City" },
        { key: "NbDevices", sortable: false, label: "Number of devices" },
        { key: "Temperature", sortable: false, label: "Temperature" },
        { key: "Humidity", sortable: false, label: "Humidity" },
        //{ key: "Options", sortable: true, label: "Options" },
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
  <div class="card" style="height: 647px">
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

      <h4 class="card-title mb-4">Locaux Techniques</h4>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <!--<div id="tickets-table_length" class="dataTables_length">
            <label class="d-inline-flex align-items-center">
              Show&nbsp;
              <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
            </label>
          </div>-->
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
      <div class="table-responsive">
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
          <template v-slot:cell(paymentstatus)="row">
            <div
              class="badge font-size-12"
              :class="{'badge-soft-danger': `${row.value}` === 'Chargeback',
              'badge-soft-success': `${row.value}` === 'Paid',
              'badge-soft-warning': `${row.value}` === 'Unpaid'}"
            >{{ row.value}}</div>
          </template>

          <template v-slot:cell(action)>
            <a
              href="/devices"
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