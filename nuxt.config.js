

const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/contentful' }
  ],

  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - 東大金融研究会公式HP',
    meta: [
      { hid: 'description', name: 'description', content: '東大金融研究会は、各分野で将来の日本を支える人財を生み出すことを目的に、実践的に金融・ビジネスを学ぶ学生団体です。これまでの活動としては、実際に証券会社の方々を招いた実践的な投資の勉強会、ベンチャーから大手企業まで訪問しCEOや幹部の方々とのディスカッション、さらには文化面においてもスポーツ選手から俳優・タレントによる講演など幅広く行ってきました。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '東大金融研究会公式HP' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://utfs.club' },
      { hid: 'og:title', property: 'og:title', content: '東大金融研究会公式HP' },
      { hid: 'og:description', property: 'og:description', content: '東大金融研究会は、各分野で将来の日本を支える人財を生み出すことを目的に、実践的に金融・ビジネスを学ぶ学生団体です。これまでの活動としては、実際に証券会社の方々を招いた実践的な投資の勉強会、ベンチャーから大手企業まで訪問しCEOや幹部の方々とのディスカッション、さらには文化面においてもスポーツ選手から俳優・タレントによる講演など幅広く行ってきました。' },
      { hid:"viewport", name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'}
      // { hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
  },

  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/report/${entry.fields.slug}`)
        ]
      })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    // use: [
    //   'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
    // ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
