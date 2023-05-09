/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://daeeun-dev.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://daeeun-dev.vercel.app/sitemap.xml'],
  },
};
