import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tailit',
  description: 'Opioniated Web Components with Lit & Tailwind',
  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Docs', link: '/', activeMatch: '^/$|^/docs/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is Tailit?', link: '/' },
        { text: 'Why Tailit?', link: '/intro/why' },
        { text: 'Getting Started', link: '/intro/getting-started' },
        { text: 'Configuration', link: '/intro/configuration' },
        { text: 'Deploying', link: '/intro/deploy' }
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Accordion', link: '/components/accordion' },
        { text: 'Button', link: '/components/button' },
        { text: 'Tags', link: '/components/button' }
      ]
    }
  ]
};
