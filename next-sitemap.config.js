/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://daeeun-dev.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
