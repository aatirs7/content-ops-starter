# Elysium Cyber Website - Development Instructions

## Tech Stack
- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **CMS**: Stackbit (Netlify Visual Editor)
- **Deployment**: Netlify

## Project Structure
```
content-ops-starter/
├── src/
│   ├── pages/           # Next.js pages (dynamic routing via [[...slug]].js)
│   ├── components/      # React components (atoms, blocks, sections, layouts)
│   ├── css/main.css     # Global styles + Tailwind
│   └── utils/           # Utility functions
├── content/
│   ├── pages/           # Page content (Markdown + YAML frontmatter)
│   └── data/            # Site config (JSON - header, footer, style)
└── elysiumcyberdocs/    # Project documentation
```

## Content Editing

### Page Files
All pages are Markdown files in `content/pages/`. They use YAML frontmatter to define:
- `title`: Page title
- `slug`: URL path
- `sections`: Array of section components
- `seo`: Meta tags and social sharing

### Section Types Available
- `GenericSection` - Flexible content section (hero, CTA, etc.)
- `FeaturedItemsSection` - Grid of feature cards
- `CarouselSection` - Image/content carousel
- `PostFeedSection` - Blog post listings
- `DividerSection` - Visual separator
- `FaqSection` - FAQ accordion (if available)

### Styling in Sections
Use Tailwind classes in the `styles` property:
```yaml
styles:
  self:
    padding:
      - pt-16
      - pb-16
    textAlign: center
```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start Stackbit visual editor
stackbit dev
```

## Making Changes

1. **Edit content**: Modify files in `content/pages/` or `content/data/`
2. **Test locally**: Run `npm run dev` and visit http://localhost:3000
3. **Commit changes**: Use descriptive commit messages
4. **Push to deploy**: Netlify auto-deploys on push to main

## Important Notes

- The dynamic router `[[...slug]].js` handles all page routing
- Components are loaded dynamically via `components-registry.ts`
- Always update `ELYSIUM_WEBSITE_PROGRESS.md` after completing tasks
