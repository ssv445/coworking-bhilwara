export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919116011130';
export const WA_TEXT =
  'Hi — saw the site. Can I drop by this week to see the floor?';
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;
