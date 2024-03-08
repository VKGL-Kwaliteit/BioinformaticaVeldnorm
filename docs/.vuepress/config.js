import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { sidebarImport } from './bar/sidebar'
import { navbarImport } from './bar/navbar'

export default defineUserConfig({
    // set site base to default value
    base: '/BioinformaticaVeldnorm/',

    // site-level locales config
    locales: {
        '/': {
        lang: 'en-US',
        title: 'Fieldnorm',
        description: 'for Bioinformatics within Medical Laboratories',
        head: [['link', { rel: 'icon', href: '/img/icon.png' }]], 
        }
    },

    // configure default theme
    theme: defaultTheme({
        logo: '/img/icon.png',
        docsRepo: 'https://github.com/VKGL-Kwaliteit/BioinformaticaVeldnorm',
        docsBranch: 'main',
        docsDir: 'docs',    
        navbar: navbarImport,
        sidebar: sidebarImport,
        contributors: false,
        editLink: false,
    }),

    // configure markdown
    markdown: {
        importCode: {
        handleImportPath: (str) =>
            str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
        },
    },

    // use plugins
    plugins: [
        searchPlugin({
            // exclude the homepage
            isSearchable: (page) => page.path !== '/',
        }),
        'vuepress-plugin-mermaidjs',
    ]
})