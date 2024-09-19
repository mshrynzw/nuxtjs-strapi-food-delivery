declare interface Restaurant {
  id: string;
  attributes: {
    name: string;
    description: {
      children: {
        text: string;
      }[];
    }[];
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}