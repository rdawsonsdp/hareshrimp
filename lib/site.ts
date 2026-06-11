/* ===== Curated site content =====
 * Single source of truth for copy, menus, hours, and contact info.
 * Sourced from hairesgulfshrimp.com (June 2026). */

export const SITE = {
  name: "Haire's Gulf Shrimp",
  tagline: "One of a kind, FRESH taste",
  description:
    "Haire's famous Louisiana shrimp in Chicago, IL. A South Side legend since the early 1980s. For speedy pick-up and carry-out call (773) 783-1818 or order online for delivery.",
};

export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}
export interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}
/** Minutes since midnight, America/Chicago. Indexed by JS getDay(): 0 = Sunday. */
export interface DaySchedule {
  open: number;
  close: number;
}
export interface DeliveryPlatform {
  name: string;
  url: string;
}
export interface Location {
  id: string;
  name: string;
  short: string;
  address: string[];
  phone: string;
  phoneHref: string;
  hours: { days: string; time: string }[];
  schedule: DaySchedule[];
  delivery: DeliveryPlatform[];
  mapsUrl: string;
  badge?: string;
  menu: MenuCategory[];
}

export const LOCATIONS: Location[] = [
  {
    id: "vincennes",
    name: "Haire's Gulf Shrimp — Vincennes Ave",
    short: "Vincennes Ave",
    address: ["7448 S Vincennes Ave", "Chicago, IL 60620"],
    phone: "(773) 783-1818",
    phoneHref: "tel:+17737831818",
    hours: [
      { days: "Mon–Thurs", time: "11 am – 8 pm" },
      { days: "Fri–Sat", time: "11 am – 10 pm" },
      { days: "Sun", time: "noon – 5 pm" },
    ],
    schedule: [
      { open: 720, close: 1020 }, // Sun
      { open: 660, close: 1200 }, // Mon
      { open: 660, close: 1200 }, // Tue
      { open: 660, close: 1200 }, // Wed
      { open: 660, close: 1200 }, // Thu
      { open: 660, close: 1320 }, // Fri
      { open: 660, close: 1320 }, // Sat
    ],
    delivery: [
      {
        name: "Uber Eats",
        url: "https://www.ubereats.com/store/haires-gulf-shrimp/dNL7YUJyToSi15dZre7tyA",
      },
      {
        name: "DoorDash",
        url: "https://www.doordash.com/store/haire's-gulf-shrimpcor-chicago-23429477/13485973/",
      },
      {
        name: "Grubhub",
        url: "https://www.grubhub.com/restaurant/haires-gulf-shrimp-food-truck-7448-south-vincennes-avenue-chicago/4272440",
      },
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Haire's+Gulf+Shrimp+7448+S+Vincennes+Ave+Chicago+IL+60620",
    badge: "The original — Greater Grand Crossing",
    menu: [
      {
        name: "Shrimp Bomb Bags",
        note: "The legend itself. Hand-battered, fried to order, straight into the bag.",
        items: [
          { name: "Small Bag", price: "$18.44", note: "14 pieces" },
          { name: "Large Bag", price: "$22.70", note: "19 pieces" },
          { name: "Small Pan", price: "$60.91", note: "60 pieces — feeds the crew" },
          { name: "Large Pan", price: "$120.91", note: "120 pieces — feeds the block" },
        ],
      },
      {
        name: "Shrimp Dinners",
        note: "Includes coleslaw with your choice of fries or spaghetti.",
        items: [
          { name: "Small Dinner", price: "$20.99", note: "15 pieces" },
          { name: "Large Dinner", price: "$33.04", note: "30 pieces" },
        ],
      },
      {
        name: "Sauce",
        note: "Cocktail or hot — don't skip it.",
        items: [{ name: "Extra Sauce", price: "$1.00", note: "2 oz" }],
      },
      {
        name: "Sides",
        items: [
          { name: "Spaghetti", price: "$5.54", note: "8 oz" },
          { name: "Spaghetti", price: "$11.08", note: "16 oz" },
          { name: "Fries", price: "$2.50" },
          { name: "Coleslaw", price: "$2.00" },
        ],
      },
      {
        name: "Beverages",
        note: "Pepsi, Mug Root Beer, Crush Grape, Crush Strawberry, Crush Orange, Brisk Sweet Tea, Schweppes Ginger Ale.",
        items: [{ name: "Pepsi products", price: "$2.25", note: "20 oz" }],
      },
    ],
  },
  {
    id: "south-loop",
    name: "Haire's Gulf Shrimp — South Loop",
    short: "South Loop",
    address: ["1156 S Jefferson St (off Roosevelt)", "Chicago, IL 60607"],
    phone: "(773) 500-9082",
    phoneHref: "tel:+17735009082",
    hours: [
      { days: "Mon", time: "11 am – 6 pm" },
      { days: "Tues–Sat", time: "11 am – 10 pm" },
      { days: "Sun", time: "noon – 6 pm" },
    ],
    schedule: [
      { open: 720, close: 1080 }, // Sun
      { open: 660, close: 1080 }, // Mon
      { open: 660, close: 1320 }, // Tue
      { open: 660, close: 1320 }, // Wed
      { open: 660, close: 1320 }, // Thu
      { open: 660, close: 1320 }, // Fri
      { open: 660, close: 1320 }, // Sat
    ],
    delivery: [
      {
        name: "Uber Eats",
        url: "https://www.ubereats.com/store/haires-gulf-shrimp-south-loop/dKH11MujV9iA1hp2S6et7A",
      },
      {
        name: "DoorDash",
        url: "https://www.doordash.com/store/haire's-gulf-shrimp-chicago-32231901/50836546",
      },
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Haire's+Gulf+Shrimp+1156+S+Jefferson+St+Chicago+IL+60607",
    badge: "New location — open now!",
    menu: [
      {
        name: "Shrimp Bomb Bags",
        note: "The legend itself. Hand-battered, fried to order, straight into the bag.",
        items: [
          { name: "Small Bag", price: "$18.00", note: "14 pieces" },
          { name: "Large Bag", price: "$21.00", note: "19 pieces" },
          { name: "Small Pan", price: "$60.00", note: "60 pieces — feeds the crew" },
          { name: "Large Pan", price: "$120.00", note: "120 pieces — feeds the block" },
        ],
      },
      {
        name: "Shrimp Dinners",
        note: "Includes coleslaw with your choice of fries or spaghetti.",
        items: [
          { name: "Small Dinner", price: "$24.00", note: "15 pieces" },
          { name: "Large Dinner", price: "$35.00", note: "30 pieces" },
        ],
      },
      {
        name: "Sandwiches",
        items: [{ name: "Shrimp Po' Boy", price: "$16.00" }],
      },
      {
        name: "Sauce",
        note: "Cocktail or hot — don't skip it.",
        items: [{ name: "Extra Sauce", price: "$1.00", note: "2 oz" }],
      },
      {
        name: "Sides",
        items: [
          { name: "Spaghetti", price: "$8.50" },
          { name: "Fries", price: "$4.00" },
          { name: "Coleslaw", price: "$3.00" },
        ],
      },
      {
        name: "Beverages",
        note: "Pepsi, Mug Root Beer, Crush Grape, Crush Strawberry, Crush Orange, Brisk Sweet Tea, Schweppes Ginger Ale.",
        items: [
          { name: "Bottled Water", price: "$2.50", note: "20 oz" },
          { name: "Bottled Pop", price: "$3.00", note: "20 oz" },
        ],
      },
      {
        name: "Desserts",
        items: [{ name: "Eli's Plain Cheesecake", price: "$4.00", note: "1 slice" }],
      },
    ],
  },
];

export const RATINGS = [
  { platform: "Facebook", score: "4.7 / 5" },
  { platform: "Uber Eats", score: "4.6 / 5" },
  { platform: "Yelp", score: "4.5 / 5" },
  { platform: "Google", score: "4.5 / 5" },
  { platform: "Restaurantji", score: "4.5 / 5" },
  { platform: "Foursquare", score: "8.4 / 10" },
  { platform: "Trip Advisor", score: "4 / 5" },
];

export const CATERING_MENU: MenuCategory[] = [
  {
    name: "Pans of Shrimp",
    items: [
      { name: "Small Pan", price: "$55.00", note: "60 pieces" },
      { name: "Large Pan", price: "$110.00", note: "120 pieces" },
    ],
  },
  {
    name: "Pans of Spaghetti",
    items: [
      { name: "Small Pan", price: "$45.00" },
      { name: "Large Pan", price: "$90.00" },
    ],
  },
  {
    name: "Sides & Drinks",
    items: [
      { name: "Pan of Fries", price: "$20.00" },
      { name: "Coleslaw", price: "$8.00", note: "8 oz" },
      { name: "Pepsi products", price: "$24.00", note: "24 assorted bottles" },
    ],
  },
];

export const NEWS = [
  {
    headline:
      "Finnie Haire Launched A South Side Fried Shrimp Business And Created A Family Legacy: 'No One Stood In His Way'",
  },
  { headline: "Chance the Rapper Talks About the First Time He Met Obama" },
  { headline: "Haire's Gulf Shrimp serves up fresh, fried shrimp on the South Side" },
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/haires_gulf_shrimp",
};

export const IMG = {
  logo: "/images/logo.png",
  hero: "/images/dinner-fries.png",
  dinnerFries: "/images/dinner-fries-large.jpg",
  dinnerSpaghetti: "/images/dinner-spaghetti.jpg",
  storefront: "/images/storefront.jpg",
  finnie: "/images/finnie-haire.jpg",
  batterMix: "/images/batter-mix.png",
  food: ["/images/food-1.png", "/images/food-2.png", "/images/food-3.png", "/images/food-4.png"],
};
