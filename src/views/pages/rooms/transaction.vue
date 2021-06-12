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
          NbDevices: "6",
          NbEvents: "27",
          NbAlerts: "40"
        },
        {
          Title: "Local technique 2",
          NbDevices: "8",
          NbEvents: "30",
          NbAlerts: "45"
        },
        {
          Title: "Local technique 3",
          NbDevices: "5",
          NbEvents: "29",
          NbAlerts: "38"
        },
        {
          Title: "Local technique 4",
          NbDevices: "6",
          NbEvents: "29",
          NbAlerts: "41"
        },
        {
          Title: "Local technique 5",
          NbDevices: "9",
          NbEvents: "28",
          NbAlerts: "39"
        },
        {
          Title: "Lcoal technique 6",
          NbDevices: "7",
          NbEvents: "31",
          NbAlerts: "45"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
    //   sortBy: "City",
      sortDesc: false,
      fields: [
        { key: "Title", sortable: false, label: "Title" },
        { key: "NbDevices", sortable: false, label: "Number of devices" },
        { key: "NbEvents", sortable: false, label: "Number of events" },
        { key: "NbAlerts", sortable: false, label: "Number of alerts" },
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

      <h4 class="card-title mb-4">Rooms</h4>
        <b-button class="float-left" size="sm" v-b-modal.modal-center variant="primary">Add Rooms</b-button>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
        </div>
        <!-- Add Rooms -->
        <b-modal
            id="modal-center"
            centered
            title="Center modal"
            title-class="font-18"
            hide-footer
        >
            <form class="form-horizontal" @submit.prevent="tryToLogIn">
                <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-home-gear-line auti-custom-input-icon"></i>
                <label for="title">Title</label>
                <input
                    type="text"
                    v-model="title"
                    class="form-control"
                    id="title"
                    placeholder="Enter title"
                    :class="{ 'is-invalid': submitted && $v.title.$error }"
                />
                <div
                    v-if="submitted && !$v.title.required"
                    class="invalid-feedback"
                >Title is required.</div>
                </div>

                <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-numbers-line auti-custom-input-icon"></i>
                <label for="nbdevices">Number of devices</label>
                <input
                    v-model="nbdevices"
                    type="text"
                    class="form-control"
                    id="nbdevices"
                    placeholder="Enter number of devices"
                    :class="{ 'is-invalid': submitted && $v.nbdevices.$error }"
                />
                <div
                    v-if="submitted && !$v.nbdevices.required"
                    class="invalid-feedback"
                >number of devices is required.</div>
                </div>

                <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-numbers-line auti-custom-input-icon"></i>
                <label for="nbdevents">Number of events</label>
                <input
                    v-model="nbdevents"
                    type="text"
                    class="form-control"
                    id="nbdevents"
                    placeholder="Enter number of events"
                    :class="{ 'is-invalid': submitted && $v.nbdevents.$error }"
                />
                <div
                    v-if="submitted && !$v.nbdevents.required"
                    class="invalid-feedback"
                >number of events is required.</div>
                </div>

                <div class="form-group auth-form-group-custom mb-4">
                <i class="ri-alert-line auti-custom-input-icon"></i>
                <label for="nbdalerts">Number of Alerts</label>
                <input
                    v-model="nbdalerts"
                    type="text"
                    class="form-control"
                    id="nbdalerts"
                    placeholder="Enter number of alerts"
                    :class="{ 'is-invalid': submitted && $v.nbdalerts.$error }"
                />
                <div
                    v-if="submitted && !$v.nbdalerts.required"
                    class="invalid-feedback"
                >number of alerts is required.</div>
                </div>

                <div class="mt-5 text-center">
                <button
                    class="btn btn-light w-md waves-effect waves-light"
                    type="submit"
                >Cancel</button>
                <button
                    class="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                >Add</button>
                </div>
            </form>
        </b-modal>
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