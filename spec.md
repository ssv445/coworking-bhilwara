# Coworking Space Website Migration Specification

## Project Overview
Complete 1:1 replication of https://ssv445.wixsite.com/cowork in Next.js for deployment on Vercel at coworking.shyamverma.com

## Business Requirements
- **Objective**: Migrate from Wix to Next.js for better performance and Vercel hosting
- **Scope**: Exact visual and functional replica with no improvements
- **Target Domain**: coworking.shyamverma.com
- **Target Users**: Computer professionals looking for coworking space in Bhilwara

## Technical Requirements

### Tech Stack
- **Framework**: Next.js 14.2.16 (App Router)
- **Runtime**: React 18
- **Styling**: Tailwind CSS (existing setup)
- **Email Service**: Resend
- **Language**: TypeScript
- **Hosting**: Vercel
- **Repository**: Existing Git repo (configured)

### Website Structure Analysis

#### Pages Required
1. **Home Page** (`/`)
   - Hero section with logo and tagline
   - Facilities section (12 items with icons)
   - Culture section
   - Contact section with location
   - Google Maps link (not embedded)

2. **Pricing Page** (`/pricing`)
   - ₹3,000/month pricing display
   - Benefits breakdown (Reserved, Shared, Value Added)
   - Seat availability: 19/32 (hardcoded)
   - FAQ section (8 questions)

3. **Visit Page** (`/visit`)
   - Visit scheduling form
   - Form fields: First Name, Last Name, Phone, Email, Profession, Company
   - Declaration checkbox
   - Form submission to shyam+coworking@readybytes.in

4. **Facilities Page** (`/facilities`)
   - Redirect to home page #facilities section

5. **Culture Page** (`/culture`)
   - Redirect to home page #culture section

#### Navigation
- Header with logo and 6 menu items: Home, Facilities, Culture, Pricing, Visit, WhatsApp
- WhatsApp link with pre-filled message
- Footer with contact information and links

### Content Specifications

#### Contact Information
- **Address**: 67, EAST EXTENSION, SUBHASH NAGAR, BHILWARA, RAJASTHAN, INDIA PIN - 311001
- **Phone**: +919782049418
- **Email**: shyam+coworking@readybytes.in
- **WhatsApp**: +919782049418 with message: "Hey, I am interested to know more about the CoWorking place, 🤔 may I visit the place tomorrow around 4-5 PM ?"

#### Facilities List (12 items)
1. Awesome Desk
2. Personal Locker
3. Clean Environment
4. Shared Meeting room
5. 5+ Brain Storming Area
6. Lush Green
7. High Speed Internet
8. Awesome Community
9. RO Water
10. AC Facility
11. Complete Security
12. Solar Energy

#### Pricing Benefits
**Reserved:**
- One Reserved Desk
- One Office Chair
- One Locker
- Backup Power Supply

**Shared:**
- High Speed Internet (WiFi and Cable)
- RO Water (Hot & Cold)
- Meeting Rooms
- BrainStorming Space
- MicroWave Oven
- Refrigerator
- Parking
- Washroom
- Library

**Value Added:**
- Tea
- Coffee
- Monitor
- Keyboard+Mouse
- Printer
- Stationary Item

#### FAQ Content (8 questions)
1. "Is it available to any person?" - Computer professionals only
2. "Can my friends & guest can come and meet me?" - No guests allowed
3. "can I use internet to use/download whatever I want?" - Fair use policy
4. "Where I can have online meetings?" - 3 shared rooms available
5. "Do you have enough parking space?" - Bike/scooty parking, roadside for cars
6. "Can I use printer / scanner / copy?" - 10 pages free monthly
7. "Do you provide tea/coffee facility?" - Optional paid service
8. "How long the uninterrupted power will continue?" - 6KV UPS for 8 hours

### Design Specifications

#### Visual Requirements
- **Colors**: Extract exact color scheme from Wix site (blue/teal theme)
- **Fonts**: Match typography from original site
- **Layout**: Pixel-perfect replica of Wix design
- **Images**: Download all images from Wix site, optimize for web
- **Responsive**: Standard breakpoints (mobile, tablet, desktop)
- **Navigation**: Hamburger menu on mobile

#### Asset Management
- Download logo.png from Wix site
- Download all facility icons
- Download background images
- Organize in `/public/images/` directory
- Optimize for Next.js Image component

### Functional Requirements

#### Form Functionality
- **Contact Form**: Visit scheduling form on `/visit` page
- **Validation**: Client-side validation for required fields
- **Submission**: Send email via Resend API
- **Feedback**: Success/error notifications
- **Email Template**: Professional format with all form data

#### Email Integration
- **Service**: Resend API
- **Recipient**: shyam+coworking@readybytes.in
- **Template**: Include all form fields
- **Error Handling**: Graceful failure with user feedback

#### SEO Requirements
- **Meta Tags**: Title, description for each page
- **Open Graph**: Social media sharing tags
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Business information markup
- **Sitemap**: Auto-generated sitemap

### Development Plan

#### Phase 1: Project Setup
1. Configure Resend integration
2. Set up environment variables
3. Download and organize assets
4. Configure Next.js optimizations

#### Phase 2: Components
1. Create reusable components (Header, Footer, SEO)
2. Build page-specific components
3. Implement responsive design
4. Add form components with validation

#### Phase 3: Pages
1. Implement Home page with all sections
2. Build Pricing page with FAQ
3. Create Visit page with working form
4. Add redirect pages for Facilities/Culture

#### Phase 4: Integration
1. Set up Resend email functionality
2. Add form submission handling
3. Implement SEO meta tags
4. Test all interactive elements

#### Phase 5: Deployment
1. Configure Vercel environment variables
2. Set up custom domain
3. Test production deployment
4. Verify all functionality

### File Structure
```
/
├── app/
│   ├── page.tsx                 # Home page
│   ├── pricing/page.tsx         # Pricing page
│   ├── visit/page.tsx           # Visit scheduling page
│   ├── facilities/page.tsx      # Redirect to home#facilities
│   ├── culture/page.tsx         # Redirect to home#culture
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── api/
│       └── send-email/route.ts  # Email API endpoint
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── WhatsAppButton.tsx       # WhatsApp floating button
│   ├── VisitForm.tsx            # Visit scheduling form
│   ├── FacilitiesGrid.tsx       # Facilities display
│   ├── PricingCard.tsx          # Pricing information
│   ├── FAQ.tsx                  # FAQ accordion
│   └── SEO.tsx                  # SEO meta component
├── public/
│   └── images/
│       ├── logo.png
│       ├── facilities/
│       └── backgrounds/
├── lib/
│   ├── resend.ts                # Email configuration
│   └── validations.ts           # Form validation schemas
└── spec.md                      # This specification
```

### Environment Variables
```
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://coworking.shyamverma.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919782049418
```

### Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Form submits successfully
- [ ] Email notifications received
- [ ] WhatsApp links work
- [ ] Responsive design functions
- [ ] SEO meta tags present
- [ ] Images load optimally
- [ ] Site performance acceptable

### Deployment Configuration
- **Platform**: Vercel
- **Domain**: coworking.shyamverma.com
- **Build Command**: `next build`
- **Install Command**: `pnpm install`
- **Framework**: Next.js

### Success Criteria
1. Visual parity with original Wix site
2. All functionality working correctly
3. Forms submitting emails successfully
4. Responsive design on all devices
5. SEO optimization implemented
6. Site deployed and accessible at custom domain
7. Performance meets or exceeds original site

### Timeline
**Estimated Development Time**: 4-6 hours
**Target Completion**: Same day as development start

---

*Specification created: September 20, 2025*
*Original Site: https://ssv445.wixsite.com/cowork*
*Target Domain: coworking.shyamverma.com*