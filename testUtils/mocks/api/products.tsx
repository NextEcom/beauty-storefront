import { AvailableLocale, ProductsDataByCollection } from "@/types";

const enProducts = [
  {
    id: `1`,
    name: "Almond Milk Soap",
    thumbnail: "/p1.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `2`,
    name: "Almond Milk Soap",
    thumbnail: "/p2.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `3`,
    name: "Almond Milk Soap",
    thumbnail: "/p3.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `4`,
    name: "Almond Milk Soap",
    thumbnail: "/p4.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `5`,
    name: "Almond Milk Soap",
    thumbnail: "/p5.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `6`,
    name: "Almond Milk Soap",
    thumbnail: "/p6.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `7`,
    name: "Almond Milk Soap",
    thumbnail: "/p7.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `8`,
    name: "Almond Milk Soap",
    thumbnail: "/p8.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
];

const ruProducts = [
  {
    id: `1`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p1.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `2`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p2.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `3`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p3.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `4`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p4.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `5`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p5.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `6`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p6.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `7`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p7.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
  {
    id: `8`,
    name: "Мыло с миндальным молоком",
    thumbnail: "/p8.png",
    price: 3.99,
    currencyCode: "INR",
    currencySymbol: "₹",
  },
];

export const mockProductsByCollection: {
  [L in AvailableLocale]: ProductsDataByCollection;
} = {
  en: {
    "Featured Products": [...enProducts],
    "New Arrivals": [...enProducts],
    "Best Sellers": [...enProducts],
  },
  ru: {
    "Рекомендуемые продукты": [...ruProducts],
    "Новые поступления": [...ruProducts],
    Бестселлер: [...ruProducts],
  },
};
