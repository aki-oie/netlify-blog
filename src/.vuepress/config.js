module.exports = {
  title: 'aki_oieのblog',

  // Description of your website
  description: 'aki_oie',

  head: [
      ['link', { href: '/css/style.css', rel: 'stylesheet'}],
      ['link', { rel: 'icon', type: 'image/jpg', href: '/img/icon.jpg' }],
      ['meta', { name: 'keywords', content: 'tech, vue' }],
    ['meta', { name: 'og:title', content: 'aki_oieのblog' }],
    [
      'meta',
      { name: 'og:description', content: 'blogです' }
    ],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:image', content: 'image/jpg' }],
    ['meta', { name: 'og:url', content: 'https://aki-oie.com/' }]
  ],

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'aki_oieのblog',
      description: 'aki_oie Blog'
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: './public/lang/ja-JP',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'aki_oie',

      // Introduction of yourself (HTML supported)
      description: '',

      // Email
      email: '',

      // Your location
      location: 'Japan',

      // Your organization
      organization: '',

      // Your avatar image
      // Set to external link
      avatar: '/img/avatar.png',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
        },

        // Facebook account and link
        //facebook: {
        //  account: 'meteorlxy.cn',
        //  link: 'https://www.facebook.com/meteorlxy.cn',
        //},

        // LinkedIn account and link
        //linkedin: {
        //  account: 'meteorlxy',
        //  link: 'http://www.linkedin.com/in/meteorlxy',
        //},

        // Twitter account and link
        twitter: {
          account: 'aki_oie',
          link: 'https://twitter.com/aki_oie',
        },

        // Instagram account and link
        //instagram: {
        //  account: 'meteorlxy.cn',
        //  link: 'https://www.instagram.com/meteorlxy.cn',
        //},
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        //url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
//      showTitle: true,
    },

    // Footer Config (Optional)
//    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
//      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
//      poweredByTheme: true,

      // Add your custom footer (HTML supported)
//      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
//    },

    // Info Card Config (Optional)
//    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
//      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
//        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
//        useGeo: true,
//      },
//    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Categories', link: '/posts/categories/', exact: false },
      { text: 'Tags', link: '/posts/tags/', exact: false },
      { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
      //{ text: 'Qiita', link: 'https://qiita.com/tomopict' },
      { text: 'About', link: '/about/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
