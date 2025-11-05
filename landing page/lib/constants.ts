/**
 * Application constants and configuration
 */

export const CONTACT_INFO = {
  phone: '0525474702',
  phoneFormatted: '052-5474702',
  phoneInternational: '972525474702',
  email: 'Kitchenspearl.info@gmail.com',
  address: 'הטיילת 5 אשדוד',
  whatsappMessage: 'היי, אשמח לקבל פרטים נוספים על שירותי פנינת הבית',
} as const

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/thepearlhouse.il',
  facebook: '#',
  tiktok: '#',
  whatsapp: `https://api.whatsapp.com/send?phone=972525474702`,
} as const

export const SERVICES = [
  {
    id: 1,
    title: 'ציפוי בשיטת הפנינה',
    description: 'שיטה חדשנית לציפוי שיש קיים בעזרת שכבות אפוקסי אומנותיות בעובי 2 מ״״מ. מראה יוקרתי ללא צורך בפירוק.',
    image: '/images/services/pearl-coating.jpg',
    benefits: [
      'מאושר מגע מזון (FDA)',
      'זמן עבודה קצר',
      'מראה חדשני בהתאמה אישית',
      'מתאים לשיש או עץ',
    ],
  },
  {
    id: 2,
    title: 'ציפוי Premium בשיטת הפנינה',
    description: 'גרסה משודרגת הכוללת פיגמנטים ועיצובים ייחודיים ליצירת משטח אומנותי, עמיד ואלגנטי.',
    image: '/images/services/premium-coating.jpg',
    benefits: [
      'עיצוב אישי',
      'מראה יוקרתי ועמוק',
      'שכבת הגנה עבה',
      'מאושר מגע מזון',
    ],
  },
  {
    id: 3,
    title: 'ציפוי ארונות בטפט PVC',
    description: 'טפט איכותי מקרואטיה בעובי 3 מ״״מ להגנה מירבית ועיצוב מותאם אישית. מתאים לארונות מטבח ולארונות רגילים.',
    image: '/images/services/pvc-coating.jpg',
    benefits: [
      'עמיד במים ותבלינים',
      'התקנה ביום אחד',
      'הדמיית תוצאה מראש',
      'מגוון דגמים עשיר',
    ],
  },
  {
    id: 4,
    title: 'לוחות פולימרי לחיפוי קירות',
    description: 'חיפוי קירות בלוחות פולימריים בעיצובים של שיש אמיתי. מתאים למטבחים וחדרי אמבטיה.',
    image: '/images/services/polymer-panels.jpg',
    benefits: [
      'מראה נקי ויוקרתי',
      'התקנה מהירה',
      'עמידות גבוהה',
      'מגוון סגנונות',
    ],
  },
] as const

export const GALLERY_ITEMS = [
  {
    id: 1,
    before: '/images/gallery/before1.jpg',
    after: '/images/gallery/after1.jpg',
    title: 'שיפוץ מטבח 1',
  },
  {
    id: 2,
    before: '/images/gallery/before2.jpg',
    after: '/images/gallery/after2.jpg',
    title: 'שיפוץ מטבח 2',
  },
  {
    id: 3,
    before: '/images/gallery/before3.jpg',
    after: '/images/gallery/after3.jpg',
    title: 'שיפוץ מטבח 3',
  },
  {
    id: 4,
    before: '/images/gallery/before4.jpg',
    after: '/images/gallery/after4.jpg',
    title: 'שיפוץ מטבח 4',
  },
  {
    id: 5,
    before: '/images/gallery/before5.jpg',
    after: '/images/gallery/after5.jpg',
    title: 'שיפוץ מטבח 5',
  },
  {
    id: 6,
    before: '/images/gallery/before6.jpg',
    after: '/images/gallery/after6.jpg',
    title: 'שיפוץ מטבח 6',
  },
] as const
