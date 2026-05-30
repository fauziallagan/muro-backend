module.exports = [

  'strapi::logger',

  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'http:',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  {
    name: 'strapi::cors',
    config: {

      origin: [

        'https://muro-fe.vercel.app',
	'http://localhost:3000',
        'https://streets-consolidation-daughters-relief.trycloudflare.com',

      ],

      methods: [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE',
        'OPTIONS',
      ],

      headers: '*',

      credentials: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
