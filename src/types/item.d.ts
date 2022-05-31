export type Item = {
  id: string,
  images: string[],
  price: number,
  categories: string[],
  amount: number,
  additionalProps?: {
    [key in string]: string
  }
};
