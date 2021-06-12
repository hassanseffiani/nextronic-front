import store from '@/state/store'

export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/pages/account/login'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['authfack/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/pages/account/register'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/forgot-password',
        name: 'Forgot-password',
        component: () => import('../views/pages/account/forgot-password'),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'home' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
                    store.dispatch('auth/logOut')
                } else {
                    store.dispatch('authfack/logout')
                }
                const authRequiredOnPreviousRoute = routeFrom.matched.some(
                    (route) => route.push('/login')
                )
                // Navigate back to previous page, or home as a fallback
                next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
            },
        },
    },
    {
        path: '/',
        name: 'home',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/dashboard/index')
    },
    {
        path: '/devices',
        name: 'Devices',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/devices/index')
    },
    {
        path: '/temp-humid-device/',
        name: 'Devices',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/temp-humid-device/index')
    },
    {
        path: '/locaux',
        name: 'Locaux Techniques',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/locaux/index')
    },
    {
        path: '/statistics',
        name: 'Statistics',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/statistics/index')
    },
    {
        path: '/alerts',
        name: 'Alerts',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/alerts/index')
    },
    {
        path: '/rooms',
        name: 'Rooms',
        meta: {
            authRequired: true,
        },
        component: () => import('../views/pages/rooms/index')
    }
]
