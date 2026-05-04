#!/bin/bash

# Portfolio Setup Guide

## 🚀 Quick Start

Your professional Next.js portfolio is ready to go! Follow these steps to customize it.

### 1. Customize Your Profile

Edit `app/page.tsx` and update the PROFILE object with your information:

```typescript
const PROFILE = {
  name: "Your Name",                    // Your full name
  role: "Your Title",                   // e.g., "Full Stack Developer"
  location: "Your Location",            // e.g., "Tashkent, UZ"
  summary: "Your professional summary", // About you (2-3 sentences)
  email: "your@email.com",              // Your email
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  telegram: "https://t.me/yourname",
};
```

### 2. Add Your Projects

In the same file, update the PROJECTS array with your 3 best projects:

```typescript
{
  title: "Project Name",
  description: "Brief description of what the project does (2-3 sentences)",
  tags: ["Technology1", "Technology2", "Technology3"],
  image: "🎯", // Use an emoji or remove for default
  links: {
    live: "https://project-demo.vercel.app",
    github: "https://github.com/yourname/project",
  },
}
```

### 3. Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

✨ **Modern Design**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Custom animated cursor with ring effect
- Dark/Light theme toggle (auto-saved)
- Fully responsive design

🚀 **Performance**
- Next.js 16 with optimizations
- Server-side rendering (SSR)
- Static page generation
- Image optimization
- CSS optimizations with Tailwind 4

♿ **Accessibility**
- WCAG compliant components
- Proper semantic HTML
- Keyboard navigation support
- Screen reader friendly

🔍 **SEO Optimized**
- Meta tags and OpenGraph
- Structured data support
- Mobile-first approach
- Fast Core Web Vitals

## 🛠️ Technologies Used

- **Framework**: Next.js 16.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Node**: React 19.2.4
- **Deployment**: Vercel (recommended)

## 📝 Customization Tips

### Change Colors
Edit `app/globals.css` to customize the theme colors:

```css
:root {
  --bg: #ffffff;        /* Light mode background */
  --fg: #0c0f14;        /* Light mode foreground */
  /* ... other colors ... */
}

html.dark {
  --bg: #0b0d10;        /* Dark mode background */
  --fg: #eaeef6;        /* Dark mode foreground */
  /* ... other colors ... */
}
```

### Customize Animations
Modify the animation values in `app/globals.css`:
- `.reveal` - Scroll animation (default: 700ms)
- `.cursor-ring` - Cursor ring animation
- Custom animations can be added in the `@keyframes` section

### Update Skills Section
Edit the three skill cards in the "Skills & Expertise" section to match your expertise.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

Your portfolio is now live!

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**GitHub Pages:**
```bash
npm run build
npm export
```

**Self-hosted:**
```bash
npm run build
npm start
```

## 📱 Mobile Optimization

The portfolio is fully responsive:
- ✓ Mobile phones (320px and up)
- ✓ Tablets (768px and up)
- ✓ Desktops (1024px and up)

## 🔗 Add Social Links

Update the social links in the PROFILE object:
- GitHub: Your public profile
- LinkedIn: Your LinkedIn profile
- Telegram: Your Telegram handle
- Email: Your professional email

## 💡 Best Practices

1. **Project Descriptions**: Be concise (2-3 sentences max)
2. **Technology Tags**: Use 3-5 relevant technologies per project
3. **Live Links**: Make sure they're accessible
4. **Profile Photo**: Consider adding one via CSS background
5. **Resume**: Upload to `/public/resume.pdf`

## 🎯 SEO Tips

1. Update metadata in `app/layout.tsx`
2. Add your domain name
3. Submit sitemap to Google Search Console
4. Use proper heading hierarchy
5. Add structured data for better rich snippets

## 🐛 Troubleshooting

**Cursor not showing?**
- Cursor only appears on desktop with fine pointer
- Works best on laptop/desktop screens

**Theme not persisting?**
- Check browser's localStorage settings
- Ensure cookies/storage are enabled

**Build fails?**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check Node version: `node --version` (needs 18+)

## 📄 License

This portfolio template is free to use for personal projects.

## 💬 Support

For Next.js help: [nextjs.org/docs](https://nextjs.org/docs)
For Tailwind help: [tailwindcss.com](https://tailwindcss.com)

---

**Last Updated**: May 2026
**Next.js Version**: 16.2.4
