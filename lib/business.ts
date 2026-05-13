// Canonical business data — keep in sync with Google Business Profile (GBP).
// One source of truth for NAP (Name/Address/Phone) → critical for local SEO.

export const BRAND = {
  name: "Ready CoWorking Space Bhilwara",
  nameHindi: "रेडी कॉवर्किंग स्पेस भीलवाड़ा",
  shortName: "Ready CoWorking Bhilwara",
  foundedYear: 2019,
  seats: 32,
} as const;

export const CONTACT = {
  // Single number used for calls, SMS, and WhatsApp.
  phoneIntl: "+919782049418",
  phoneDisplay: "+91 9782049418",
  // Format used inside wa.me URLs (no '+').
  whatsappNumber: "919782049418",
  email: "shyam+coworking@readybytes.in",
} as const;

export const ADDRESS = {
  street: "67, near Ram Temple, East Extension, Subhash Nagar",
  city: "Bhilwara",
  region: "Rajasthan",
  postalCode: "311001",
  country: "IN",
  plusCode: "9J8J+7X",
  geo: { latitude: 25.3463, longitude: 74.6364 },
} as const;

export const HOURS = {
  daysOpen: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  opens: "09:00",
  closes: "19:00",
  displayShort: "Mon–Sat 9–7",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/readycoworking",
  maps: "https://www.google.com/maps/search/Ready+CoWorking+Space+Bhilwara",
} as const;

export const SITE = {
  url: "https://coworkingspacebhilwara.com",
} as const;

// Manually maintained — sync with GBP after every review batch.
// JSON-LD aggregateRating with stale numbers can hurt rankings.
export const REVIEWS = {
  ratingValue: "5.0",
  reviewCount: "4",
  bestRating: "5",
  worstRating: "1",
} as const;

// WhatsApp link helpers.
export const WA_DEFAULT_TEXT =
  "Hi — saw the site. Can I drop by this week to see the office?";

export const waUrl = (text: string = WA_DEFAULT_TEXT) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telHref = `tel:${CONTACT.phoneIntl}`;
