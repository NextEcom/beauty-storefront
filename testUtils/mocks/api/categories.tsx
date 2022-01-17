import { AvailableLocale, CategoryMenuItem } from "@/types";
import { AppConfig } from "config/app";

export const getMockCategoriesData: (
  locale: AvailableLocale
) => CategoryMenuItem[] = (locale) => {
  if (locale == AppConfig.Locale.en) {
    return [
      {
        title: "Fashion",
        href: "/fashion",
        subMenu: [
          {
            title: "Man Clothes",
            href: "/product/search/man-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
          {
            title: "Woman Clothes",
            href: "/product/search/woman-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
        ],
      },
      {
        title: "Electronics",
        href: "/product/search/electronics",
        subMenu: [
          {
            title: "Man Clothes",
            href: "/product/search/man-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
          {
            title: "Woman Clothes",
            href: "/product/search/woman-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
        ],
      },
      {
        title: "Bikes",
        href: "/product/search/bikes",
      },
      {
        title: "Home & Garden",
        href: "/product/search/home&garden",
        subMenu: [
          {
            title: "Man Clothes",
            href: "/product/search/man-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
          {
            title: "Woman Clothes",
            href: "/product/search/woman-clothes",
            subMenu: [
              {
                title: "Shirt",
                href: "/product/search/shirt",
              },
              {
                title: "T- shirt",
                href: "/product/search/t-shirt",
              },
              {
                title: "Pant",
                href: "/product/search/pant",
              },
              {
                title: "Underwear",
                href: "/product/search/underwear",
              },
            ],
          },
          {
            title: "Accessories",
            href: "/product/search/accessories",
            subMenu: [
              {
                title: "Belt",
                href: "/product/search/belt",
              },
              {
                title: "Hat",
                href: "/product/search/Hat",
              },
              {
                title: "Watches",
                href: "/product/search/Watches",
              },
              {
                title: "Sunglasses",
                href: "/product/search/Sunglasses",
              },
            ],
          },
          {
            title: "Shoes",
            href: "/product/search/shoes",
            subMenu: [
              {
                title: "Sneakers",
                href: "/product/search/Sneakers",
              },
              {
                title: "Sandals",
                href: "/product/search/Sandals",
              },
              {
                title: "Formal",
                href: "/product/search/Formal",
              },
              {
                title: "Casual",
                href: "/product/search/Casual",
              },
            ],
          },
          {
            title: "Bags",
            href: "/product/search/bags",
            subMenu: [
              {
                title: "Backpack",
                href: "/product/search/backpack",
              },
              {
                title: "Crossbody Bags",
                href: "/product/search/Crossbody Bags",
              },
              {
                title: "Side Bags",
                href: "/product/search/Side Bags",
              },
              {
                title: "Slides",
                href: "/product/search/Slides",
              },
            ],
          },
        ],
      },
      {
        title: "Gifts",
        href: "/product/search/gifts",
      },
      {
        title: "Music",
        href: "/product/search/music",
      },
      {
        title: "Health & Beauty",
        href: "/product/search/health&beauty",
      },
      {
        title: "Pets",
        href: "/product/search/pets",
      },
      {
        title: "Baby Toys",
        href: "/product/search/baby-toys",
      },
      {
        title: "Groceries",
        href: "/product/search/groceries",
      },
      {
        title: "Automotive",
        href: "/product/search/automotive",
      },
    ];
  } else {
    return [
      {
        title: "люди",
        href: "/men",
      },
      {
        title: "женщины",
        href: "/women",
      },
      {
        title: "лицо",
        href: "/face",
        subMenu: [
          {
            title: "мыть лицо",
            href: "/face/face-wash",
            subMenu: [
              {
                title: "Пенка для умывания лица",
                href: "/face/face-wash/foaming-face-wash",
              },
              {
                title: "Пенящееся очищающее средство для лица",
                href: "/face/face-wash/foaming-facial-cleanser",
              },
            ],
          },
          {
            title: "Крем для лица",
            href: "/face/face-cream",
          },
        ],
      },

      {
        title: "тело",
        href: "/body",
        subMenu: [
          {
            title: "гель для тела",
            href: "/body/body-wash",
          },
          {
            title: "крем для тела",
            href: "/body/body-cream",
          },
        ],
      },
    ];
  }
};
