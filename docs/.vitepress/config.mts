import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-components/',
  title: "@martinsagat/components",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started/index' },
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/installation/index' },
        ]
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Inputs',
            collapsed: true,
            items: [
              { text: 'Text', link: '/components/inputText/index' },
              { text: 'Textarea', link: 'components/inputTextarea/index' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/martinsagat/vue-components' }
    ]
  }
})
