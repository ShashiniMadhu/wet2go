export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'product', label: 'Product' },
  { id: 'how', label: 'How It Works' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact Us' },
]

export const PRICE = 1999
export const FREE_DELIVERY = 5000
export const CONTACT_EMAIL = 'wet2go.visionventures@gmail.com'

export function formatRs(amount, { cents = amount % 1 !== 0 } = {}) {
  return `Rs. ${amount.toLocaleString('en-US', {
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: 2,
  })}`
}

export const COLORS = [
  { id: 'black', name: 'Black', hex: '#111111', image: '/images/bag-black.jpeg' },
  { id: 'green', name: 'Forest Green', hex: '#2f5d3a', image: '/images/bag-green.jpeg' },
  { id: 'orange', name: 'Sunset Orange', hex: '#e07a2f', image: '/images/bag-orange.jpeg' },
  { id: 'purple', name: 'Royal Purple', hex: '#6b4aa0', image: '/images/bag-purple.jpeg' },
  { id: 'rose', name: 'Rose', hex: '#c45c7a', image: '/images/bag-rose.jpeg' },
]

export const ADVENTURES = [
  { name: 'Swimming', image: '/images/adventures/swimming.jpg', icon: 'swim' },
  { name: 'Gym', image: '/images/adventures/gym.jpg', icon: 'gym' },
  { name: 'Sports', image: '/images/adventures/sports.jpg', icon: 'sports' },
  { name: 'Hiking', image: '/images/adventures/hiking.jpg', icon: 'hike' },
  { name: 'Travel', image: '/images/adventures/travel.jpg', icon: 'travel' },
  { name: 'Beach Trips', image: '/images/adventures/beach.jpg', icon: 'beach' },
]

export const GALLERY = [
  '/images/bag-black.jpeg',
  '/images/bag-green.jpeg',
  '/images/bag-orange.jpeg',
  '/images/bag-purple.jpeg',
  '/images/bag-rose.jpeg',
]

export const HERO_THUMBS = [
  '/images/hero-image.jpg',
  '/images/bag.jpeg',
  '/images/bag-black.jpeg',
  '/images/bag-orange.jpeg',
]

export const FAQS = [
  {
    q: 'What is Wet2Go?',
    a: 'Wet2Go is a ventilated waterproof bag that keeps wet clothes separate from the rest of your belongings, so you can pack wet and still travel fresh.',
  },
  {
    q: 'Is the bag fully waterproof?',
    a: 'Yes. The outer shell and lining are waterproof, with mesh vents that let moisture escape without soaking everything else in your bag.',
  },
  {
    q: 'How does the water collection pouch work?',
    a: 'The bottom 4" zippered pouch collects runoff. A removable sponge sits inside so you can squeeze out excess water after swimming, gym, or the beach.',
  },
  {
    q: 'Can I fold it for travel?',
    a: 'Yes. Wet2Go folds down and secures with Velcro, so it packs small when you do not need it and opens fast when you do.',
  },
  {
    q: 'Do you offer free delivery?',
    a: `Delivery is free on orders over ${formatRs(FREE_DELIVERY, { cents: false })}. Standard shipping applies to smaller orders.`,
  },
]
