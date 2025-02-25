import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cangxue-blog",
  description: "Cangxue's blog",
  srcDir: 'src-md', // Define the source route (start from /docs)
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.png"}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    lastUpdated:{
      text: "更新时间",
      formatOptions:{
        dateStyle:"full",
        timeStyle:"medium"
      }
    }
  }
})
