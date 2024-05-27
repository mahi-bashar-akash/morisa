import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                'resources/scss/style-sheet.scss',
                'resources/js/user/app.js',
                'resources/js/admin/app.js',
            ],
            refresh: true,
        }),
    ],
});
