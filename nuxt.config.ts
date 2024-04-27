export default defineNuxtConfig({
    extends: ['@nuxt/ui-pro'],
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ui: {
        icons: ['lucide'],
    },
})