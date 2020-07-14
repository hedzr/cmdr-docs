const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../_site',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ABC',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ABC',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: 'carbon',
  themeConfig: {
    repo: 'hedzr/abc',
    editLinks: true,
    docsDir: 'docs',
    // // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    // Your ad ID and placement label from your Carbon Ads tag:
    carbonAds: {
      serve: "yourServeId",
      placement: "yourPlacementLabel"
    },
    smoothScroll: true,
    // sidebar: 'auto',
    sidebarDepth: 5,
    displayAllHeaders: false,
    activeHeaderLinks: true,
    lastUpdated: 'Last Updated', // string | boolean
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/cmdr/': getCmdrGuideSidebar('Guide'),
          //'/guide/': getGuideSidebar('Guide', 'Advanced'),
          //'/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          //'/theme/': getThemeSidebar('Theme', 'Introduction')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          //'/zh/api/': getApiSidebar(),
          '/zh/cmdr/': getCmdrGuideSidebar('指南'),
          //'/zh/guide/': getGuideSidebar('指南', '深入'),
          //'/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
          //'/zh/theme/': getThemeSidebar('主题', '介绍')
          //'': ''
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-171624977-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ],

  markdown: {
    // extractHeaders: [ 'h2', 'h3', 'h4' ],
    // // markdown-it-anchor 的选项
    // anchor: { permalink: false },
    // // markdown-it-toc 的选项
    // toc: { includeLevel: [1, 2] },
    // slugify: 
    lineNumbers: true,
    // plugins: {
    //   '@org/foo': {}
    //   'markdown-it-bar': {
    //     // 提供你的选项
    //   }
    // },
    // extendMarkdown: md => {
    //   md.set({ breaks: true })
    //   // md.use(require('markdown-it-anchor'))
    // },
  },

  // PWA via https
  serviceWorker: true,

})

function getApiSidebar () {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}

const cmdrGuideFiles = fs
  .readdirSync(path.resolve(__dirname, '../cmdr/guide'))
  .sort()
  .map(filename => {
    if (filename.slice(-3)=='.md') {
      var name = filename.slice(0, -3)
      return (name == 'README') ? 'guide/' : 'guide/' + name
    }
  })
console.log(cmdrGuideFiles)
function getCmdrGuideSidebar (title) {
  return [
    {
      title: 'CMDR',
      collapsable: false,
      children: [
        ['', 'Introduction'],
        'getting-started',
      ]
    },
    {
      title: title,
      collapsable: false,
      children: cmdrGuideFiles
    },
    {
      title: 'Others',
      collapsable: false,
      children: [
        'faq',
      ]
    },
  ]
}

// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins
    }
  ]
}

function getThemeSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'blog-theme',
        'inheritance'
      ]
    }
  ]
}
