## `README.md` is being written at the moment : )

Project Structure

```
.
├── LICENSE.md
├── README.md
├── astro.config.mjs
├── eslint.config.js
├── netlify.toml
├── package-lock.json
├── package.json
├── public
│   ├── _headers
│   ├── decapcms
│   │   ├── config.yml
│   │   └── index.html
│   ├── ics
│   │   └── event_liquid-dreams-volume-3.ics
│   └── robots.txt
├── sandbox.config.json
├── src
│   ├── assets
│   │   ├── favicons
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon.ico
│   │   │   └── favicon.svg
│   │   ├── images
│   │   │   ├── Artist_LiquidDreams_0x01000111.jpg
│   │   │   ├── Artist_LiquidDreams_Howz.jpg
│   │   │   ├── Artist_LiquidDreams_Norman.Hernandez.jpg
│   │   │   ├── Artist_LiquidDreams_Rafael.Manuel.jpg
│   │   │   ├── Artist_LiquidDreams_Santa.Cecilia.jpg
│   │   │   ├── Artist_LiquidDreams_TUKUPI.jpg
│   │   │   ├── Flier_LiquidDreams.gif
│   │   │   ├── Logo_LiquidDreams_Volume.3.png
│   │   │   ├── Logo_LiquidDreams_Volume.3_Green.png
│   │   │   ├── Logo_LiquidDreams_ringOnly.png
│   │   │   ├── Logo_LiquidDreams_ringOnly_Green.png
│   │   │   ├── Logo_LiquidDreams_ringOnly_compressed.png
│   │   │   ├── Poster_LiquidDreams_Volume.3.jpg
│   │   │   ├── Poster_LiquidDreams_Volume.3_Square.jpg
│   │   │   ├── QR_LiquidDreams_VenmoQRC.jpg
│   │   │   ├── app-store.png
│   │   │   ├── default.png
│   │   │   ├── google-play.png
│   │   │   └── hero-image.png
│   │   └── styles
│   │       └── tailwind.css
│   ├── components
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   ├── Logo.astro
│   │   ├── blog
│   │   │   ├── Grid.astro
│   │   │   ├── GridItem.astro
│   │   │   ├── Headline.astro
│   │   │   ├── List.astro
│   │   │   ├── ListItem.astro
│   │   │   ├── Pagination.astro
│   │   │   ├── RelatedPosts.astro
│   │   │   ├── SinglePost.astro
│   │   │   ├── Tags.astro
│   │   │   └── ToBlogLink.astro
│   │   ├── common
│   │   │   ├── Analytics.astro
│   │   │   ├── ApplyColorMode.astro
│   │   │   ├── BasicScripts.astro
│   │   │   ├── CommonMeta.astro
│   │   │   ├── Image.astro
│   │   │   ├── Metadata.astro
│   │   │   ├── SiteVerification.astro
│   │   │   ├── SocialShare.astro
│   │   │   ├── SplitbeeAnalytics.astro
│   │   │   ├── ToggleMenu.astro
│   │   │   └── ToggleTheme.astro
│   │   ├── ui
│   │   │   ├── Background.astro
│   │   │   ├── Button.astro
│   │   │   ├── DListItem.astro
│   │   │   ├── Form.astro
│   │   │   ├── Headline.astro
│   │   │   ├── ItemGrid.astro
│   │   │   ├── ItemGrid2.astro
│   │   │   ├── Timeline.astro
│   │   │   └── WidgetWrapper.astro
│   │   └── widgets
│   │       ├── Announcement.astro
│   │       ├── BlogHighlightedPosts.astro
│   │       ├── BlogLatestPosts.astro
│   │       ├── Brands.astro
│   │       ├── CallToAction.astro
│   │       ├── Contact.astro
│   │       ├── Content.astro
│   │       ├── FAQs.astro
│   │       ├── Features.astro
│   │       ├── Features2.astro
│   │       ├── Features3.astro
│   │       ├── Footer.astro
│   │       ├── Header.astro
│   │       ├── Hero.astro
│   │       ├── Hero2.astro
│   │       ├── HeroText.astro
│   │       ├── Note.astro
│   │       ├── Pricing.astro
│   │       ├── Stats.astro
│   │       ├── Steps.astro
│   │       ├── Steps2.astro
│   │       └── Testimonials.astro
│   ├── config.yaml
│   ├── content
│   │   ├── config.ts
│   │   └── post
│   │       ├── artist_0x01000111.mdx
│   │       ├── artist_Howz.mdx
│   │       ├── artist_Norman.Hernandez.mdx
│   │       ├── artist_Rafael.Manuel.mdx
│   │       ├── artist_Santa.Cecilia.mdx
│   │       └── artist_TUKUPI.mdx
│   ├── env.d.ts
│   ├── layouts
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── navigation.js
│   ├── pages
│   │   ├── 404.astro
│   │   ├── [...blog]
│   │   │   ├── [...page].astro
│   │   │   ├── [category]
│   │   │   │   └── [...page].astro
│   │   │   ├── [tag]
│   │   │   │   └── [...page].astro
│   │   │   └── index.astro
│   │   ├── events
│   │   │   └── liquid-dreams-volume-3.astro
│   │   ├── index.astro
│   │   ├── privacy.md
│   │   ├── rss.xml.ts
│   │   └── terms.md
│   ├── types.d.ts
│   └── utils
│       ├── blog.ts
│       ├── directories.ts
│       ├── frontmatter.mjs
│       ├── images-optimization.ts
│       ├── images.ts
│       ├── permalinks.ts
│       └── utils.ts
├── tailwind.config.cjs
├── tsconfig.json
├── vendor
│   └── integration
│       ├── index.mjs
│       ├── types.d.ts
│       └── utils
│           ├── configBuilder.ts
│           └── loadConfig.ts
├── vercel.json
└── vscode.tailwind.json
```