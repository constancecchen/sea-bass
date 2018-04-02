<img src="https://github.com/constancecchen/sea-bass/raw/master/images/logo.png" width="300" height="300">

# What is this shenaniganry?

Oh hey! This is my (Constance, the person who is narrating) personal boilerplate for starting quick sites like landing pages or other front-ends (because there clearly aren't enough frameworks out there on the internet). It's meant to be fairly simple and reusable, but above all individual. But feel free to fork or what have you!

## But why "sea-bass"?

I dunno, it was some god-awful pun I came up with in the middle of the night after eating too much pizza. Here was my thought process:

- My first and last name starts with "C"
- This is a "base" framework of sorts
- C-Base is probably already taken
- Oh wait! I love vintage hipster logos

Thus... sea bass(?)

## Where else has this tomfoolery proliferated?

Huh, let's see, I know have variations of this somewhere!

- [My portfolio site (I would hope so anyway)](https://github.com/constancecchen/constancecchen.github.io/tree/master/css)
- [IGDA Seattle](https://github.com/IGDA-Seattle/IGDA-Seattle.github.io)
- [SIX](https://github.com/SeattleIndies/seattleindiesexpo)
- [Seattle Indies](https://github.com/SeattleIndies/wp-seattle-indies/tree/master/css)
- ...and more to come!

## Usage

- Download or clone
- `npm install`
- `gulp`

## TODOs

- CSS variables with @supports checks
- Add a Sass/JS linter + config files
- Take a look at [Front-End-Toolkit](https://github.com/devbridge/Front-End-Toolkit.git) (this is awesome)

## Tests & processes to consider setting up

- Cross-browser and visual testing
  - [Browserstack](https://www.browserstack.com) (usually latest-1)
  - [Spotbot](https://spotbot.qa) / [BackstopJS](https://github.com/garris/BackstopJS) / [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- Accessibility testing
  - Chrome DevTool's Accessibility Audit / [aXe](https://axe-core.org/)
  - [ally.js](https://allyjs.io) / [acesslint.js](https://github.com/accesslint/accesslint.js) / [ally.css](https://ffoodd.github.io/a11y.css)
  - (if applicable) Test static sites with JS disabled
- Performance testing
  - [Chrome DevTool's Lighthouse Audit](https://developers.google.com/web/tools/lighthouse/) / [PerfTool](http://performance-tool.devbridge.com)
  - [Smashing Mag's Front End Performance Checklist](https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/)
- SEO testing
  - Favicons, OG metadata, schema.org microdata where applicable
  - 404/500 status pages and [broken link scanning](https://www.brokenlinktest.com)
  - robots.txt, sitemap.xml, [Google Search Console](https://www.google.com/webmasters)
  - [Google Analytics](https://developers.google.com/analytics), [A/B testing](https://developers.google.com/analytics/solutions/experiments)
- SysAdmin/DevOps
  - SSL via [Cloudflare](https://www.cloudflare.com) or [LetsEncrypt](https://letsencrypt.org)
  - [Security report](https://httpsecurityreport.com)
  - [HTTP2 check](https://tools.keycdn.com/http2-test)
  - [Uptime tracking](https://uptimerobot.com)
- WordPress-specific
  - Install a cache and sitemap plugin
  - Add a login page mover, limit number of attempts
  - Cron-scheduled database backup to remote cloud storage
  - [DISALLOW_FILE_EDIT, disable direct access to certain php files, etc.](https://codex.wordpress.org/Hardening_WordPress)
- General/Multiple
  - [sonarwhale](https://sonarwhal.com) (accessibility, perf, security, etc.)
  - [Web Developer Checklist](http://webdevchecklist.com/)
  - [Front End Checklist](https://github.com/thedaviddias/Front-End-Checklist)

## Favorite libs & resources

- [tinypng/jpg](https://tinypng.com), [svgomg](https://jakearchibald.github.io/svgomg)
- [srcset images generator](http://www.responsivebreakpoints.com)
- [lazy load images](https://github.com/ApoorvSaxena/lozad.js)
<!--
  Still looking for a good no-js lazyloading lib. Maybe a Jekyll partial with <noscript>?
  https://stackoverflow.com/questions/29145354/dry-lazy-loaded-images-with-noscript-fallback
  https://github.com/codegaze/Jekyll-Responsive-Images-Wrapper
-->
- [priority+ nav](https://github.com/gijsroge/priority-navigation), [hamburgers.css](https://jonsuh.com/hamburgers)
- [modaal](http://humaan.com/modaal/) / [micromodal.js](https://micromodal.now.sh)
- [barba.js](https://github.com/luruke/barba.js) / [InstantClick](http://instantclick.io)
- [feature.js](http://featurejs.com)
