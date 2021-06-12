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
                serial: "#85565",
                address: "123.114.12.10",
                imei: "3255465656562",
                status: "Connected",
                battery: "75%",
                temp: 29,
                humid: 40,
                lat: 33.222332,
                lng: -9.226655,
                maxT: 30,
                minT: 25,
                maxH: 50,
                minH: 35,
                Conneted: true
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
    }
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-4 mt-4">Device informations</h4>
      <table style="border-collapse: collapse;">
        <tr style="border-bottom: 1pt solid grey; height: 30px; font-weight: bold;">
          <td style="width: 200px">Serial </td>
          <td>{{devices[0].serial}}</td>
        </tr>
        <tr style="border-bottom: 1pt solid grey; height: 30px; font-weight: bold;">
          <td>Address IP </td>
          <td>{{devices[0].address}}</td>
        </tr>
        <tr style="border-bottom: 1pt solid grey; height: 30px; font-weight: bold;">
          <td>IMEI </td>
          <td>{{devices[0].imei}}</td>
        </tr>
        <tr style="border-bottom: 1pt solid grey; height: 30px; font-weight: bold;">
          <td>Status </td>
          <td>{{devices[0].status}}</td>
        </tr>
        <tr style="border-bottom: 1pt solid grey; height: 30px; font-weight: bold;">
          <td>Battery </td>
          <td>{{devices[0].battery}}</td>
        </tr>
      </table>
    </div>
    <!-- <div class="card-body">
      

      <h4 class="card-title mb-4 mt-4">Device informations</h4>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
         
        </div>
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

          <template v-slot:cell(icon)="row">
              <i v-if="`${row.value}` == 'tE'" class="ri-temp-hot-line font-size-24 text-danger"></i>
              <i v-if="`${row.value}` == 'tR'" class="ri-temp-hot-line font-size-24 text-secondary"></i>
              <i v-if="`${row.value}` == 'hE'" class="ri-water-flash-fill font-size-24 text-primary"></i>
              <i v-if="`${row.value}` == 'hR'" class="ri-water-flash-fill font-size-24 text-secondary"></i>
          </template>

        </b-table>
      </div>
      <div class="row">
        <div class="col" >
          <div class="dataTables_paginate paging_simple_numbers float-right">
            <ul class="pagination pagination-rounded mb-0">
        
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>