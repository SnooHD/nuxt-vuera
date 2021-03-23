import { defineNuxtConfig } from '@nuxtjs/composition-api';

export default defineNuxtConfig({
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Logopicker',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vuera.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    tailwindcss: {
        jit: true
    },

    axios: {
        // baseURL: 'http://192.168.1.68:4040/api/'
        baseURL: 'http://127.0.0.1:4040/api'
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/composition-api'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
});
