import pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,

  triggers: {
    keywords: ['holiday', 'holidays', 'public holiday', 'public holidays'],
  },

  query_format: {
    regex: [
      'holidays?\\s+(in|of)\\s+HD_LOCATION.*',
      'public\\s+holidays?\\s+(in|of)\\s+HD_LOCATION.*',
      'is\\s+.*\\s+(a\\s+)?holiday\\s+(in|of)\\s+HD_LOCATION.*',
      '(list|show)\\s+holidays?\\s+(in|of)\\s+HD_LOCATION.*',
    ],
    fallBackRegex: [
      '(holidays?|public\\s+holidays?)\\s+(in|of)\\s+(?<HD_LOCATION>.*)',
    ],
  },

  client: {
    location: pkg.module,
    moduleName: pkg.umdName || 'HD' + pkg.name,
    baseURL: '/' + pkg.name,
  },

  format: {
    mainline: true,
    sidebar: true, // holidays are a great sidebar quickview: "Is today a holiday?" style card
  },

  permissions: {},

  info: {
    category: 'utility',
    dataSource: 'Nager.Date',
  },
}
