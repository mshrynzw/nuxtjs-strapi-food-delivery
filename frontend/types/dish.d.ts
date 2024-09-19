export interface Dish {
  id: string;
  attributes: {
    name: string;
    description:  string;
    price: number;
    quantity: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}