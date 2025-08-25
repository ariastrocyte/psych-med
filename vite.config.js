import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: './',
    plugins: [tailwindcss()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                antidepressants: 'antidepressants.html',
                antipsychotics: 'antipsychotics.html',
                hyptonics: 'hyptonics.html',
                bipolar: 'bipolar.html',
                stimulants: 'stimulants.html',
                antianxiety: 'anti-anxiety.html'
            }
        }
    }
})
