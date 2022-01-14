export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  thumbnail: string;
};

export type ProductsDataByCollection = {
  [key: string]: Product[];
};
