# Coworking Bhilwara - Design System Documentation

## Overview
This document contains the complete design system extracted from the original website at https://ssv445.wixsite.com/cowork for exact replication in Next.js.

## Color Palette

### Primary Colors
- **Primary Blue**: `#0275D8` (rgb(2, 117, 216))
  - Used for: Facility icons, primary buttons, links, accent elements
  - Brand color throughout the website

### Text Colors
- **Headings**: `#000000` (rgb(0, 0, 0))
  - Main headings and titles
- **Body Text**: `#0275D8` (rgb(2, 117, 216))
  - Regular text content
- **Links**: `#0000EE` (rgb(0, 0, 238))
  - Navigation links and interactive text

### Background Colors
- **Main Background**: `transparent` / `white`
- **Button Backgrounds**: Various - mostly transparent with colored text

## Typography

### Font Families
1. **Headings**: `"courier new", courier-ps-w01, monospace`
   - Size: 48px
   - Weight: 400 (normal)
   - Used for main headings

2. **Body Text & Navigation**: `avenir-lt-w01_35-light1475496, sans-serif`
   - Size: 16px
   - Weight: 400 (normal)
   - Used for body text, navigation, and secondary content

### Font Hierarchy
- **H1**: Large headings (48px, courier new)
- **H2**: Section headings (courier new)
- **H3-H6**: Subheadings (avenir)
- **Body**: Regular text (avenir, 16px)
- **Navigation**: Menu items (avenir, 16px)

## Layout Structure

### Header
- Logo positioned on the left
- Horizontal navigation menu on the right
- Navigation items: Home, Facilities, Culture, Pricing, Visit, WhatsApp

### Main Sections
1. **Hero Section**
   - Large logo centered
   - Main heading: "The Best Office Space in Bhilwara to co-work with great peers."
   - Subheading with description

2. **Facilities Section**
   - Grid layout of facility cards
   - Each card contains an icon and text
   - 12 main facilities displayed

3. **Culture Section**
   - Simple text section with heading and description

4. **Contact Section**
   - Background image
   - Contact information
   - Call-to-action buttons

### Footer
- Address information
- Action buttons (Call, Schedule Visit, WhatsApp)
- Copyright notice

## Facility Icons

The following SVG icons have been created based on the website:

1. **awesome-desk.svg** - Desk/workspace icon
2. **personal-locker.svg** - Locker/storage icon
3. **high-speed-internet.svg** - WiFi/internet icon
4. **meeting-room.svg** - Conference room icon
5. **ac-facility.svg** - Air conditioning icon
6. **clean-environment.svg** - Cleanliness/hygiene icon

### Additional Facilities (need icons):
- Brain Storming Area
- Lush Green
- Awesome Community
- RO Water
- Complete Security
- Solar Energy

## Image Assets

### Logos
- **Navigation Logo**: `/public/images/logos/logo-nav.png` (159x62px)
- **Hero Logo**: `/public/images/logos/logo-hero.png` (360x360px)

### Images
- **Contact Image**: `/public/images/hero/contact-image.jpeg` (1247x1200px)

## Responsive Behavior

### Desktop Layout
- Fixed navigation header
- Multi-column facility grid
- Large hero image and text

### Mobile Considerations
- Collapsible navigation menu
- Single-column facility layout
- Responsive text sizing

## Key Design Principles

1. **Minimalist Design**: Clean, uncluttered layout
2. **Professional Appearance**: Business-focused aesthetic
3. **Blue Accent Color**: Consistent use of #0275D8 throughout
4. **Icon-Based Communication**: Visual icons for facilities
5. **Clear Typography**: Readable fonts with good contrast

## Button Styles

### Primary Buttons
- Background: Transparent or colored
- Text Color: #0275D8 or #0000EE
- Border: Often transparent
- Hover states: Likely color transitions

### Call-to-Action Buttons
- "Schedule A Visit"
- "Call"
- "WhatsApp"
- "See Pictures"

## Contact Information

**Address**: 67, EAST EXTENSION, SUBHASH NAGAR, BHILWARA, RAJASTHAN, INDIA PIN - 311001

**Phone**: +919782049418

**WhatsApp**: Available with pre-filled message template

## Technical Notes

- Built originally on Wix platform
- Uses custom fonts (Avenir variants, Courier New)
- SVG icons for scalability
- Responsive images with multiple sizes
- External integrations: WhatsApp, Google Maps (iframe)

## Implementation Guidelines

1. Use CSS variables for the color palette
2. Implement responsive grid for facilities section
3. Use Next.js Image component for optimized loading
4. Create reusable components for facility cards
5. Implement smooth scrolling and transitions
6. Ensure accessibility with proper alt tags and semantic HTML
7. Use CSS modules or styled-components for styling
8. Implement proper SEO meta tags

This design system provides the foundation for creating an exact replica of the original website using modern web technologies.