# CLAUDE.md - AI Assistant Guide for FLoRA Homesite

## Project Overview

**FLoRA ENGINE** (Facilitating Learning Regulation and Adaptation) is a Next.js-based research project website that showcases work on Self-Regulated Learning (SRL) with AI support. The site provides information about the research team, publications, and regional implementations of the FLoRA platform.

**Key Information:**
- **Framework:** Next.js 14.2.5 with App Router
- **Language:** TypeScript 5
- **UI Library:** Ant Design 5.21.2
- **Deployment:** Runs on port 3001 at `/home` sub-path
- **Primary Contact:** tony.li@monash.edu

## Technology Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 14.2.5 |
| Runtime | React | 18 |
| Language | TypeScript | 5 |
| UI Library | Ant Design (antd) | 5.21.2 |
| Styling | SASS/SCSS | 1.77.8 |
| HTTP Client | Axios | 1.7.7 |
| Email | Nodemailer | 6.9.15 |
| Icons | Ant Design Icons | 5.4.0 |

## Directory Structure

```
/home/user/flora-homesite/
├── src/app/                          # Next.js App Router directory
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles and CSS variables
│   ├── page.module.css               # Home page styles
│   │
│   ├── layouts/                      # Layout components
│   │   ├── MainLayout.tsx            # Main wrapper with header/nav/footer
│   │   └── MainLayout.module.scss    # Layout styles
│   │
│   ├── components/                   # Reusable components
│   │   ├── Logo.tsx                  # Logo component
│   │   └── Logo.module.scss          # Logo styles
│   │
│   ├── api/                          # API routes
│   │   └── contact/
│   │       └── route.ts              # Contact form email endpoint
│   │
│   ├── contact/                      # Contact page
│   │   └── page.tsx
│   ├── team/                         # Team members page
│   │   └── page.tsx
│   ├── publications/                 # Publications list page
│   │   └── page.tsx
│   └── news/                         # News page (placeholder)
│       ├── page.tsx
│       └── news.module.scss
│
├── public/                           # Static assets
│   ├── images/
│   │   └── logo1.png
│   ├── logo1.png
│   ├── next.svg
│   └── vercel.svg
│
├── data/                             # Static data files (currently unused)
│   ├── conference.txt
│   ├── journal.txt
│   └── workshops.txt
│
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.mjs                   # Next.js configuration
└── .gitignore                        # Git ignore patterns
```

## Key File Paths

| Purpose | Path |
|---------|------|
| Root Layout | `src/app/layout.tsx` |
| Home Page | `src/app/page.tsx` |
| Main Layout | `src/app/layouts/MainLayout.tsx` |
| Contact API | `src/app/api/contact/route.ts` |
| Contact Page | `src/app/contact/page.tsx` |
| Team Page | `src/app/team/page.tsx` |
| Publications | `src/app/publications/page.tsx` |
| News Page | `src/app/news/page.tsx` |
| Logo Component | `src/app/components/Logo.tsx` |
| Global Styles | `src/app/globals.css` |
| Next Config | `next.config.mjs` |
| TypeScript Config | `tsconfig.json` |

## Development Workflows

### Setup and Installation

```bash
# Install dependencies
npm install

# Run development server (port 3001)
npm run dev

# Build for production
npm run build

# Start production server (port 3001)
npm start

# Run linter
npm run lint
```

### Environment Variables

Required for contact form functionality:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=true
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
```

These are used in `src/app/api/contact/route.ts` for sending emails via Nodemailer.

### Accessing the Application

- **Development:** http://localhost:3001/home
- **Production:** https://yourdomain.com/home

Note: The app uses `/home` as basePath (configured in `next.config.mjs`)

### Git Workflow

- **Main Branch:** (not specified in current status)
- **Feature Branches:** Use branch naming convention `claude/claude-md-[session-id]`
- **Commits:** Use clear, descriptive commit messages
- **Push:** Always use `git push -u origin <branch-name>`

## Component Architecture

### Layout Hierarchy

```
RootLayout (src/app/layout.tsx)
└── MainLayout (src/app/layouts/MainLayout.tsx)
    ├── Header
    │   ├── Logo
    │   └── Navigation Menu (Ant Design Menu)
    ├── Content Area
    │   └── {children} - Page content
    └── Footer
```

### Navigation Structure

The MainLayout provides a consistent navigation menu:
- **Home** → `/home`
- **Team** → `/home/team`
- **Publications** → `/home/publications`
- **Contact Us** → `/home/contact`

### Component Patterns

All pages and most components use:
- **Client-side rendering:** `'use client'` directive
- **Functional components:** No class components
- **TypeScript interfaces:** For props typing
- **React hooks:** For state management

Example component structure:
```typescript
'use client';
import React from 'react';
import { Typography } from 'antd';

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

export default function Component({ title, children }: ComponentProps) {
  return (
    <div>
      <Typography.Title>{title}</Typography.Title>
      {children}
    </div>
  );
}
```

## Styling Conventions

### Three-Tier Styling Approach

1. **Global CSS Variables** (`src/app/globals.css`)
   - Define reusable CSS custom properties
   - Color schemes, fonts, spacing
   - Light/dark mode support

2. **CSS Modules** (`.module.scss`, `.module.css`)
   - Component-scoped styles
   - Import as: `import styles from './Component.module.scss'`
   - Use as: `className={styles.className}`

3. **Inline Styles** (React.CSSProperties)
   - Dynamic styling within components
   - Typography and layout adjustments
   - Quick component-specific styling

4. **Ant Design Theme**
   - Component library styling
   - Token-based customization
   - Dark theme for Menu component

### Color Scheme

```scss
// Primary colors
$header-bg: #001529;        // Dark blue header
$body-bg: #f0f2f5;          // Light gray background
$footer-bg: #f7f7f7;        // Light gray footer

// Accent colors
$primary-blue: #1890ff;     // Ant Design primary
$gold: #faad14;             // Gold accents
```

### Responsive Design

- Fixed content width: 1200px on desktop
- Flexbox and CSS Grid for layouts
- Mobile-first approach
- Media queries in `page.module.css`

## Data Handling

### Current Data Sources

1. **Hardcoded Data** (Primary method)
   - Publications: Embedded arrays in `src/app/publications/page.tsx`
   - Team members: Embedded arrays in `src/app/team/page.tsx`
   - Home page content: Inline in `src/app/page.tsx`

2. **Static Files** (Unused)
   - `data/conference.txt` - Conference publications
   - `data/journal.txt` - Journal articles
   - `data/workshops.txt` - Workshop papers
   - These exist but are NOT currently loaded by the application

3. **External APIs**
   - Contact form: POST to `/api/contact`
   - External links to university websites and publications

### Adding New Data

**For Publications:**
Edit `src/app/publications/page.tsx` and add to the appropriate array:

```typescript
const journalArticles = [
  {
    authors: "Author1, Author2",
    year: "2024",
    title: "Article Title",
    source: "Journal Name",
    doi: "https://doi.org/..."
  },
  // Add new entry here
];
```

**For Team Members:**
Edit `src/app/team/page.tsx`:

```typescript
const teamMembers = [
  {
    name: "Name",
    position: "Position",
    image: "/images/photo.jpg",
    description: "Description text",
    link: "https://profile-url.com"
  },
  // Add new member here
];
```

## API Endpoints

### POST `/api/contact`

**Location:** `src/app/api/contact/route.ts`

**Purpose:** Handle contact form submissions and send emails

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
// or
{
  "success": false,
  "error": "Error message"
}
```

**Important Notes:**
- Sends email to hardcoded address: `tony.li@monash.edu`
- Requires environment variables for SMTP configuration
- Uses Nodemailer for email delivery
- Has validation for required fields

**To modify recipient:**
Edit line in `src/app/api/contact/route.ts`:
```typescript
to: 'tony.li@monash.edu',  // Change this email
```

## Key Conventions and Patterns

### TypeScript Configuration

- **Strict mode enabled:** All TypeScript checks enforced
- **Path alias:** `@/*` maps to `./src/*`
- **Module resolution:** Bundler mode for Next.js
- **JSX preservation:** For Next.js processing

### Import Path Conventions

```typescript
// Use path alias for src imports
import MainLayout from '@/app/layouts/MainLayout';
import Logo from '@/app/components/Logo';

// Relative imports for same directory
import styles from './Component.module.scss';

// External packages
import { Typography } from 'antd';
import axios from 'axios';
```

### Component File Organization

```
component-name/
├── page.tsx                 # Main component (for pages)
├── ComponentName.tsx        # For reusable components
├── ComponentName.module.scss
└── types.ts                 # Type definitions (if needed)
```

### Naming Conventions

- **Components:** PascalCase (`MainLayout.tsx`)
- **Styles:** PascalCase with extension (`MainLayout.module.scss`)
- **Variables:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **Interfaces:** PascalCase with descriptive names

### Client vs Server Components

**Current Pattern:** All pages use `'use client'` directive

**Reason:** Application uses:
- Form state management
- Event handlers
- Ant Design components (client-side)
- Modal interactions

**When to use Client Components:**
- Forms with state
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Browser-only APIs

**When to use Server Components:**
- Static content
- Data fetching
- Improved performance
- SEO optimization

## Common Tasks

### Adding a New Page

1. Create directory in `src/app/[page-name]/`
2. Create `page.tsx`:
```typescript
'use client';
import React from 'react';
import MainLayout from '@/app/layouts/MainLayout';

export default function NewPage() {
  return (
    <MainLayout>
      <div>
        {/* Your content */}
      </div>
    </MainLayout>
  );
}
```
3. Add navigation link in `src/app/layouts/MainLayout.tsx`
4. Create styles if needed: `[page-name].module.scss`

### Updating Team Members

**File:** `src/app/team/page.tsx`

1. Add team member photo to `public/images/`
2. Add entry to `teamMembers` array
3. Follow existing structure for consistency

### Adding Publications

**File:** `src/app/publications/page.tsx`

1. Determine category (journal, conference, workshop)
2. Add to appropriate array (`journalArticles`, `conferencePapers`, `workshopsDemos`)
3. Include all fields: authors, year, title, source, doi

### Modifying Styles

**Global styles:** Edit `src/app/globals.css`
**Component styles:** Edit respective `.module.scss` file
**Layout styles:** Edit `src/app/layouts/MainLayout.module.scss`

### Updating Logo

Replace file at: `public/logo1.png`
Logo is referenced in: `src/app/components/Logo.tsx`

## Important Notes and Gotchas

### BasePath Configuration

**Critical:** The app runs at `/home` sub-path, not root

```javascript
// next.config.mjs
basePath: '/home',
assetPrefix: '/home/',
```

**Implications:**
- All routes are prefixed with `/home`
- Assets load from `/home/` prefix
- Links should use relative paths or include `/home`
- Development: http://localhost:3001/home

### Port Configuration

Default port is **3001** (not 3000)

```json
// package.json
"dev": "next dev -p 3001",
"start": "next start -p 3001"
```

### Email Configuration

Contact form requires environment variables:
- Must be set in `.env.local`
- Never commit `.env.local` to git
- Email sends to hardcoded address (tony.li@monash.edu)

### Static Data Files

Files in `data/` directory (conference.txt, journal.txt, workshops.txt):
- **Currently unused** by the application
- Publications are hardcoded in components instead
- May be legacy or for future migration

### News Page

`src/app/news/page.tsx` is currently a **placeholder**:
- Empty content
- Basic structure only
- Needs content implementation

### Ant Design Configuration

Using Ant Design v5 with specific configurations:
- Menu uses dark theme
- Typography components throughout
- Grid system (Row/Col) for layouts
- Icons from `@ant-design/icons`

### Image Assets

Logo exists in **two locations**:
1. `public/logo1.png` - Used by Logo component
2. `public/images/logo1.png` - Backup/alternative

### TypeScript Strictness

Strict mode is enabled:
- All variables must be typed
- Null checks required
- No implicit any
- Props must have interfaces

## Debugging and Troubleshooting

### Common Issues

**Issue:** "Cannot find module '@/app/...'"
- **Solution:** Check `tsconfig.json` has correct path alias

**Issue:** 404 on assets
- **Solution:** Remember basePath is `/home`, use `/home/...` for absolute paths

**Issue:** Contact form not sending emails
- **Solution:** Check environment variables are set in `.env.local`

**Issue:** Styles not applying
- **Solution:** Verify CSS Module import and className usage

**Issue:** Port already in use
- **Solution:** Kill process on 3001 or change port in package.json

### Development Commands

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Type checking
npx tsc --noEmit

# Check for build errors
npm run build
```

## Testing Strategy

**Current State:** No automated tests configured

**Recommended Testing:**
- Unit tests: Jest + React Testing Library
- E2E tests: Playwright or Cypress
- Type checking: `tsc --noEmit`
- Linting: `npm run lint`

## Performance Considerations

### Current Approach
- All pages use client-side rendering
- No ISR or SSG configured
- Images not optimized with next/image

### Optimization Opportunities
1. Convert static pages to Server Components
2. Use Next.js Image component for optimization
3. Implement SSG for publications and team pages
4. Add loading states and suspense boundaries
5. Code splitting for large components

## Security Notes

### Current Security Measures
- Environment variables for sensitive data
- Basic form validation
- HTTPS recommended for production

### Security Considerations
- Contact form vulnerable to spam (no CAPTCHA)
- Email address hardcoded in API route
- No rate limiting on API endpoint
- Consider adding CSRF protection

## External Dependencies

### Partner Institutions
- Monash University
- Radboud University
- Technical University of Munich (TUM)
- University of Oulu

### External Links
- Regional sites: Australia, China, Latin America, Europe
- CELLA partner logos and links
- Publication DOIs
- Team member profile links
- Keynote videos

## Deployment Notes

### Build Process
```bash
npm run build
npm start
```

### Environment Requirements
- Node.js (version specified in package.json)
- npm or yarn
- SMTP server access for email functionality

### Production Checklist
- [ ] Set environment variables
- [ ] Update hardcoded email addresses if needed
- [ ] Configure basePath for deployment environment
- [ ] Test all routes with `/home` prefix
- [ ] Verify email functionality
- [ ] Check responsive design on mobile
- [ ] Test contact form submission
- [ ] Verify external links are valid

## AI Assistant Guidelines

### When Working on This Codebase

1. **Always use MainLayout** for new pages to maintain consistency
2. **Follow existing patterns** for data structures (publications, team)
3. **Use TypeScript interfaces** for all props and data structures
4. **Test changes at** http://localhost:3001/home (not localhost:3000)
5. **Consider basePath** when working with routes and assets
6. **Use Ant Design components** for UI consistency
7. **Follow CSS Module patterns** for styling
8. **Validate environment variables** before testing contact form
9. **Check TypeScript errors** before committing
10. **Update this CLAUDE.md** if you discover new patterns or conventions

### Before Making Changes

- [ ] Read relevant component files
- [ ] Understand existing patterns
- [ ] Check for dependencies
- [ ] Test locally with `npm run dev`
- [ ] Verify TypeScript compilation
- [ ] Check responsive design
- [ ] Test on port 3001 with /home prefix

### After Making Changes

- [ ] Run `npm run lint`
- [ ] Test all affected pages
- [ ] Verify mobile responsiveness
- [ ] Check browser console for errors
- [ ] Update documentation if needed
- [ ] Commit with clear message
- [ ] Push to appropriate branch

---

## Quick Reference

**Start Development:**
```bash
npm run dev
# Access at: http://localhost:3001/home
```

**Key Files to Know:**
- Layout: `src/app/layouts/MainLayout.tsx`
- Home: `src/app/page.tsx`
- API: `src/app/api/contact/route.ts`
- Config: `next.config.mjs`

**Common Paths:**
- Path alias: `@/` → `src/`
- Public assets: `/home/` prefix required
- API routes: `/home/api/`

**Contact:**
- Primary: tony.li@monash.edu
- Research: FLoRA Engine project

---

*Last Updated: 2025-11-13*
*Version: 1.0*
*Generated for AI Assistant use with Claude Code*
