import { uuid } from 'vue-uuid';
export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        link: '/'
    },
    {
        id: 3,
        label: 'menuitems.locaux.text',
        icon: 'ri-hotspot-line',
        link: '/Locaux'
    },
    /* {
        id: 4,
        label: 'menuitems.statistics.text',
        icon: 'ri-bar-chart-2-line',
        link: '/Statistics'
    }, */
    {
        id: 17,
        label: 'menuitems.alerts.text',
        icon: 'ri-alert-line',
        link: '/alerts'
    },
    {
        id: uuid.v1(),
        label: 'menuitems.rooms.text',
        icon: 'ri-home-gear-line',
        link: '/rooms'
    }
    /* {
        id: 18,
        isLayout: true
    },
    {
        id: 19,
        label: 'menuitems.pages.text',
        isTitle: true
    },
    {
        id: 20,
        label: 'menuitems.authentication.text',
        icon: 'ri-account-circle-line',
        link: '/auth/login-1',
    },
    {
        id: 25,
        label: 'menuitems.utility.text',
        icon: 'ri-profile-line',
        link: '/pages/starter',
    }, */
]