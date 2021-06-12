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
      devices :
        [
            {
                time: "08/06/2021 11:00",
                desc: "Temperature Elevee",
                temp: 32,
                humidity: 40,
                icon: "tE",
            },
            {
                time: "08/06/2021 11:07",
                desc: "Temperature Retablie",
                temp: 27,
                humidity: 45,
                icon: "tR"
            },
            {
                time: "08/06/2021 11:11",
                desc: "Humidite Elevee",
                temp: 28,
                humidity: 48,
                icon: "hE"
            },
            {
                time: "08/06/2021 11:16",
                desc: "Humidite Retablie",
                temp: 26,
                humidity: 41,
                icon: "hR"
            }
        ],
      totalRows: 1,
      currentPage: 1,
      perPage: 6,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
      sortBy: "time",
      sortDesc: true,
      fields: [
        { key: "icon", sortable: false, label: ""},
        { key: "time", sortable: false, label: "Time" },
        { key: "desc", sortable: false, label: "Description"},
        { key: "temp", sortable: false, label: "Temperature" },
        { key: "humidity", sortable: false, label: "Humidity" },
        //{ key: "paymentstatus", sortable: true, label: "Payment Status" },
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
    },
    rowClass(item, type) {
      if (type == "row") return "d-none d-md-table-row"
      
    }
  }
};
</script>
<style >
.my-Table td{
  padding: 3px
}
</style>

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

      <h4 class="card-title mb-4 mt-4">Last Alerts</h4>
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
          class="my-Table"
          :tbody-tr-class="rowClass"
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

          <template v-slot:cell(icon)="row">
              <i v-if="`${row.value}` == 'tE'" class="ri-temp-hot-line font-size-18 text-danger"></i>
              <i v-if="`${row.value}` == 'tR'" class="ri-temp-hot-line font-size-18 text-secondary"></i>
              <i v-if="`${row.value}` == 'hE'" class="ri-water-flash-fill font-size-18 text-primary"></i>
              <i v-if="`${row.value}` == 'hR'" class="ri-water-flash-fill font-size-18 text-secondary"></i>
          </template>

        </b-table>
      </div>
      <div class="row">
        <div class="col" >
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