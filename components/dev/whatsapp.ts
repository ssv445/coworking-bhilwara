export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919116011130';
export const WA_TEXT =
  'Hey, I am interested to know more about the CoWorking place, 🤔 may I visit the place tomorrow around 4-5 PM ?';
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;
