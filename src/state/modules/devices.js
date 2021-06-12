import { devicesService } from '../../helpers/fakebackend/devices.service';

export const state = {
    devices:[],
    status: [],
    dayAnl: [],
    error: ""
}

export const getters = {
    devices(state) {
        return state.devices
    },
    dayAnalytics(state) {
        return state.dayAnl
    },
}

export const actions = {
    
    getDevices({ commit }) {

        devicesService.getDevices()
            .then(
                devices => {
                    commit("devicesSuccess", devices)
                },
                error => {
                    console.log(error)
                }
            );
    },

    getDevicesStatus({ commit }) {

        devicesService.getDevicesStatus()
            .then(
                dayAnl => {
                    //console.log(devices)
                    commit("dayanalyticsSuccess", dayAnl)
                },
                error => {
                    console.log(error)
                }
            );
    },

    dayAnalytics({ commit }) {

        devicesService.dayAnalytics()
            .then(
                anl => {
                    //console.log(devices)
                    commit("dayanalyticsSuccess", anl)
                },
                error => {
                    console.log(error)
                }
            );
    },
};

export const mutations = {
    dayanalyticsSuccess(state, dayAnl) {
        state.dayAnl = dayAnl;
    },
    devicesSuccess(state, devices) {
        state.devices = devices;
    },
    devicesStatusSuccess(state, status) {
        state.status = status;
    },
};
