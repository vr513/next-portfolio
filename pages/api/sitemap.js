// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const posts = ['/','/blog','/work','/projects','/contact'];

    // Create each URL row
    posts.forEach(page => {
      smStream.write({
        url: `${page}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }

}